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
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by campitos on 4/05/17.
 */
@RestController
@CrossOrigin
public class ControladorConsulta {

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
        XSSFSheet hoja=   analisis.analisis1(inputStream,0);
        System.out.println("Numero de registros "+hoja.getLastRowNum());

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
}
