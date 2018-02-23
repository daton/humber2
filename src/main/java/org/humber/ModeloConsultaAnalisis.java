package org.humber;

import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.Set;

/**
 * Created by campitos on 17/05/17.
 */


public class ModeloConsultaAnalisis {
    XSSFWorkbook wb;
    XSSFSheet sheet;
    //Viejos
    Workbook wbViejo;
    Sheet sheetViejo;

    ArrayList<ConsultaOii> consulta;
    ArrayList<Organizados> grupos;

    Arreglo elementos[];

    @Autowired RepositorioOii repo;


    /**
     * Este método recibe el archivo y se usa en el {@link ControladorConsulta} . Su función es
     *  trasnsformarlo a un objeto de tipo {@link XSSFWorkbook} para ser analizado por el método
     *  análisis1()
     *
     * @param inputStream El stream del archivo
     * @param hoja el numero de la hoja que es la primera es decir la cero
     * @throws Exception Una excepcion
     */

    public void cargarArchivo(InputStream inputStream, int hoja) throws Exception {


        wb = new XSSFWorkbook(inputStream);

        sheet = wb.getSheetAt(hoja);
        System.out.println("CARGADO Y GENERADO CON EXITO");

    }

    public void cargarArchivoViejo(InputStream inputStream, int hola)throws Exception{
       wbViejo=new HSSFWorkbook(inputStream);
       sheetViejo=wbViejo.getSheetAt(hola);
        System.out.println("VIEJO CARGADO Y GENERADO CON exito");
    }

    public Arreglo[] analisis1() {
        grupos = new ArrayList<Organizados>();
        consulta = new ArrayList<>();

        int registros = sheet.getLastRowNum();

        System.out.println("NUMERO DE REGISTROS del excel cargado: " + registros);
        int nosecInicial = (int) sheet.getRow(1).getCell(0).getNumericCellValue();

        //La siguiente variable es el numero de casos para cada uno de los registros
        int numeroCasos = 0;
        System.out.println("NUMERO DE SEC INICIAL:" + nosecInicial);
        for (int i = 1; i <= registros; i++) {
            XSSFRow row = sheet.getRow(i);
            int nosec = (int) row.getCell(0).getNumericCellValue();
            String paterno = row.getCell(1).getStringCellValue();
            String materno = row.getCell(2).getStringCellValue();
            String nombre = row.getCell(3).getStringCellValue();

            LocalDate fec_nac = LocalDate.parse(row.getCell(4).getStringCellValue());
            int edad = (int) row.getCell(5).getNumericCellValue();
            LocalDate fec_impe = LocalDate.parse(row.getCell(6).getStringCellValue());
            String claveoii = row.getCell(7).getStringCellValue();
            String descoii = row.getCell(8).getStringCellValue();


            consulta.add(new ConsultaOii(nosec, paterno, materno, nombre, fec_nac, edad, fec_impe, claveoii, descoii));


        }

        Set<Integer> generado = new LinkedHashSet<>();
        for (ConsultaOii oii : consulta) {
            generado.add(oii.getNosecuenc());
        }
        elementos = new Arreglo[generado.size()];
        System.out.println("TODOSSSS" + generado.size());
        int i = 0;
        int indiceTama = 0;
        for (Integer valor : generado) {
            System.out.println("Valor del grupos:  " + valor);
            elementos[i] = new Arreglo();
            elementos[i].setValor(valor);
            elementos[i].setOii(new ArrayList<>());
            i++;


        }
        /**********************************************************************************************************
        //Este algoritmo es muy bonito simple y hermoso!!
         ( jejejeje, que sencishiiitooo me vi) veamos como se ve el JSON !!!!!!!
        /************************************************************************************/
        for (ConsultaOii oii : consulta) {

            for (Arreglo a : elementos) {
                int valor = a.getValor();
                if (valor == oii.getNosecuenc()) a.getOii().add(oii);
            }
        }



        //Aqui seleccionamos el grupo cuyo Num_sec =20 para ver si esta bien
        //En el objeto Arreglo a se guardan todos los grupos, para acceder a cada uno del
        // Arreglo a obtenemos la propiedad a.getOii(); el cual por cada elemenrto del arreglo nos da
        //un ArrayList<ConsultaOii>


        for (Arreglo a : elementos) {

            if(a.getValor()==20){
                for(ConsultaOii oii:a.getOii()){
                    System.out.println(oii);
                }
            }


        }



        return elementos;
    }

    public Arreglo[] analisis1Viejo() {
        grupos = new ArrayList<Organizados>();
        consulta = new ArrayList<>();

        int registros = sheetViejo.getLastRowNum();

        System.out.println("NUMERO DE REGISTROS del excel cargado: " + registros);
        int nosecInicial = (int) sheetViejo.getRow(1).getCell(0).getNumericCellValue();

        //La siguiente variable es el numero de casos para cada uno de los registros
        int numeroCasos = 0;
        System.out.println("NUMERO DE SEC INICIAL:" + nosecInicial);
        for (int i = 1; i <= registros; i++) {
            Row row = sheetViejo.getRow(i);
            int nosec = (int) row.getCell(0).getNumericCellValue();
            String paterno = row.getCell(1).getStringCellValue();
            String materno = row.getCell(2).getStringCellValue();
            String nombre = row.getCell(3).getStringCellValue();

            LocalDate fec_nac = LocalDate.parse(row.getCell(4).getStringCellValue());
            int edad = (int) row.getCell(5).getNumericCellValue();
            LocalDate fec_impe = LocalDate.parse(row.getCell(6).getStringCellValue());
            String claveoii = row.getCell(7).getStringCellValue();
            String descoii = row.getCell(8).getStringCellValue();


            consulta.add(new ConsultaOii(nosec, paterno, materno, nombre, fec_nac, edad, fec_impe, claveoii, descoii));


        }

        Set<Integer> generado = new LinkedHashSet<>();
        for (ConsultaOii oii : consulta) {
            generado.add(oii.getNosecuenc());
        }
        elementos = new Arreglo[generado.size()];
        System.out.println("TODOSSSS" + generado.size());
        int i = 0;
        int indiceTama = 0;
        for (Integer valor : generado) {
            System.out.println("Valor del grupos:  " + valor);
            elementos[i] = new Arreglo();
            elementos[i].setValor(valor);
            elementos[i].setOii(new ArrayList<>());
            i++;


        }
        /**********************************************************************************************************
         //Este algoritmo es muy bonito simple y hermoso!!
         ( jejejeje, que sencishiiitooo me vi) veamos como se ve el JSON !!!!!!!
         /************************************************************************************/
        for (ConsultaOii oii : consulta) {

            for (Arreglo a : elementos) {
                int valor = a.getValor();
                if (valor == oii.getNosecuenc()) a.getOii().add(oii);
            }
        }



        //Aqui seleccionamos el grupo cuyo Num_sec =20 para ver si esta bien
        //En el objeto Arreglo a se guardan todos los grupos, para acceder a cada uno del
        // Arreglo a obtenemos la propiedad a.getOii(); el cual por cada elemenrto del arreglo nos da
        //un ArrayList<ConsultaOii>


        for (Arreglo a : elementos) {

            if(a.getValor()==20){
                for(ConsultaOii oii:a.getOii()){
                    System.out.println(oii);
                }
            }


        }



        return elementos;
    }


}
