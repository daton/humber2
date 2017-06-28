package org.humber;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.gridfs.GridFSDBFile;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by campitos on 4/05/17.<br>
 * <h2>Controlador para cargar archivo y hacer una consulta</h2>
 *  <p>El metodo cponsultaOii recibe mediante POST el archivo de consulta OII en formato xlsx de
 *   microsoft excel. Este método divide por numero de secuencia (el cual distingue por id a cada asegurado)
 *   para ser analizados por grupo de numero de secuencia.</p>
 *  <p> El análisis se realiza por lo siguiente:
 *   Si de 1 SOLO ASEGURADO se obtienen varios padecimientos , se deberá tomar el "mas
 *   grave" y estos estan clasificados segpun la ACCION de la siguiente manera:</p>
 *   <ol>
 *       <li>RECHAZO</li>
 *        <li>Revisión</li>
 *        <li>Sin beneficios</li>
 *        <li>Aceptar</li>
 *   </ol>
 *
 */
@RestController
@CrossOrigin
public class ControladorConsulta {

    @Autowired RepositorioOii repo;
    Arreglo[]elementos;

    /**
     *   Este metodo recibe mediante POST el archivo de consulta OII en formato xlsx de
     *   microsoft excel. Este método divide por numero de secuencia (el cual distingue por id a cada asegurado)
     *   para ser analizados por grupo de numero de secuencia.
     *   El análisis se realiza por lo siguiente:
     *   Si de 1 SOLO ASEGURADO se obtienen varios padecimientos , se deberá tomar el "mas
     *   grave" y estos estan clasificados segpun la ACCION de la siguiente manera:
     *   1-.RECHAZO
     *   2-.Revisión
     *   3-.Sin beneficios
     *   4-.Aceptar
     *
     * @param file Este es el archivo en formato xlsx de MS Excel a ser analizado
     * @return El tipo de retorno es un simple HashMap que  nos devuelve como response el JSON {success:true}
     * @throws Exception Una excepcion en caso de que no se cargue el archivo
     */
    @RequestMapping(value="/consultaoii", method= RequestMethod.POST, headers={"Accept=text/html"})
    public @ResponseBody
    String handleFileUpload(@RequestParam("file") MultipartFile file)throws Exception{
        String nombre=file.getOriginalFilename();
        String prefijo="";
        DateTime date=new DateTime();
        int dia=  date.getDayOfYear();
        int segundo=  date.getSecondOfDay();
        long tamano= file.getSize();
        String fileName = null;
        InputStream inputStream = null;
        OutputStream outputStream = null;
        if (file.getSize() > 0) {
            inputStream = file.getInputStream();


            String contenido=  file.getContentType();
            int punto=nombre.indexOf(".");
            String nombreSolo=nombre.substring(0, punto);
            prefijo="dia"+dia+"segundo"+segundo;
            //   System.out.println("nombre de archivo:"+fileName);
            //Guardamos imagen, si es que hay
           // gridFsTemplate.store(inputStream,prefijo+nombre,file.getContentType());


        }
        System.out.println("El nombre de archivaldo es:" + nombre + " el tamaño del archivo esta:" + tamano + " se guardo como: " + prefijo + nombre);

     ModeloConsultaAnalisis analisis=new ModeloConsultaAnalisis();
     /*
     Primero cargamos el archivo, este metodo de cargarArchivo  y aplicamos el análisis1(9 el cual consta de:

      */
    analisis.cargarArchivo(inputStream,0);
    //Hacemos un analisis1()
     elementos=   analisis.analisis1();
     //Despues obtenemos el dictamen
      ArrayList<ConsultaOii> oiDictamen=          obtenerDictamen(elementos);
        System.out.println("Elementoss encontrados:"+oiDictamen.size());
        for(ConsultaOii oii: oiDictamen){
            System.out.println("Numero de secuencia:" +oii.getNosecuenc()+" ACCION---- "+oii.getAccion());
        }





/*
Este Arreglo[] es muy importante, el numero de elementos es igual a los distintos numeros de secuencia
 distintos encontrados, este arrreglo tiene como miembor un ArrayList<ConsultaOii> que a suves de cada uno
 de sus elementos tiene todas las FILAS de su grupo, DEBEMOS DE ANALIZAR ESTOS GRUPOS
 para poder hacer la seleccion por los parametros de ACEPTAR(5) O RECHAZAR (1)
 */



        Map map = new HashMap();
        map.put("success", true);
        ObjectMapper maper2=new ObjectMapper();
        return maper2.writeValueAsString(map);

    }

    /*
    Para leer la imagen DE MONGODB
    */
    @RequestMapping(value="/generar", method= RequestMethod.GET)
    public @ResponseBody
    byte[] culera2(HttpServletResponse response)throws IOException {


            Workbook wb = new XSSFWorkbook();
            Sheet sh1 = wb.createSheet("Sheet1");
            Row r = sh1.createRow(0);
            Cell c = r.createCell(0);
            c.setCellValue("topito" +
                    "");

            // Write the output to a file
            String nombre = "me-gusta-el-poio.xlsx";
            FileOutputStream out = new FileOutputStream(nombre);

            wb.write(out);
            out.close();
            wb.close();

       // GridFSDBFile filesito=gridFsTemplate.findOne(new Query(Criteria.where("filename").is(nombre)));
        File salidaFile=new File(nombre);
        //filesito.writeTo(imageFile);
        byte[] bytes= FileCopyUtils.copyToByteArray(salidaFile);
        System.out.println("Recobrando correctamente con este metodo del todo nuevof");
        response.setHeader("Content-Disposition", "attachment; filename=\"" + salidaFile.getName() + "\"");
       // response.setHeader("Content-Disposition", "attachment; filename=deployment-definitions.xlsx");
        response.setContentLength(bytes.length);
        response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        return bytes;

        /*
         Map map = new HashMap();
        map.put("success", true);
        ObjectMapper maper2=new ObjectMapper();
         */
    }

    ArrayList<ConsultaOii> obtenerDictamen(Arreglo[] elementos)throws  Exception{

        String accion="nada";
        ArrayList<ConsultaOii> oiiDictamen=new ArrayList<>();

        for(Arreglo a:elementos){


            ArrayList<ConsultaOii> oiiActual=    a.getOii();

            int indice=0;
            ConsultaOii oiiC=new ConsultaOii();
            //Iteramos el grupo actual (oiiActual)

            for(ConsultaOii oii:oiiActual){

                //Enlazamos la accion respectiva encontrada la clave del repo de los Oii2016
                Oii oiie=     repo.findOne(oii.getClaveoii());



                System.out.println("Accion :  "+oiie.getAccion());
                String accionAsignada=oiie.getAccion();
                oiiC.setNosecuenc(oii.getNosecuenc());
                oiiC.setAccion(accionAsignada);
                 int miIndiceActual=Modelo.obtenerIndice(oiie.getAccion());
                if(miIndiceActual>=indice)indice=miIndiceActual;
       /*   if(accionAsignada.equalsIgnoreCase("Rechazo")){
              oiiC.setAccion(accionAsignada);
              break;
                    }*/


            }
            //Del indice resultante  obtenemos de regreso la accion
            oiiC.setAccion(Modelo.obteneraccion(indice));
            //El primero ConsultaOii




            oiiDictamen.add(oiiC);

        }
        return oiiDictamen;
    }
}
