package org.humber;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.URL;

/**
 * Created by campitos on 1/05/17.
 */


public class ModeloOii {


    public String leer()throws Exception{
        boolean leido=false;
        String algo="nada";
        try{
            System.out.println("Ver la ruta"+System.getProperty("user.dir")); ;
            System.out.println(new File(".").getCanonicalPath());
            FileInputStream fileIn = null;
            FileOutputStream fileOut = null;



            URL loadedResource = this.getClass().getClassLoader().getResource("oii2016tiempo.xlsx");
            InputStream inputStream = loadedResource.openStream();


            XSSFWorkbook wb = new XSSFWorkbook(inputStream);

            XSSFSheet sheet = wb.getSheetAt(0);
            XSSFRow row = sheet.getRow(1);
            XSSFCell celda= row.getCell(3);
            String valor=  ""+celda.getStringCellValue();


            System.out.println("Bien por hoy   "+valor);
            leido=true;
            algo=valor;

        }catch(Exception e){
            System.out.println("mal "+e.getMessage());
            algo=e.getMessage();
        }

        return algo;
    }
}
