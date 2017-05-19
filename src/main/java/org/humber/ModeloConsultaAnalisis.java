package org.humber;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

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
    ArrayList<ConsultaOii> consulta;
    ArrayList<Organizados> grupos;


    public void cargarArchivo(InputStream inputStream, int hoja) throws Exception {


        wb = new XSSFWorkbook(inputStream);

        sheet = wb.getSheetAt(hoja);
        System.out.println("CARGADO Y GENERADO CON EXITO");

    }

    public void analisis1() {
        grupos=new ArrayList<Organizados>();
        consulta=new ArrayList<>();

        int registros = sheet.getLastRowNum();
        System.out.println("NUMERO DE REGISTROS " + registros);
        int nosecInicial = (int) sheet.getRow(1).getCell(0).getNumericCellValue();

        //La siguiente variable es el numero de casos para cada uno de los registros
        int numeroCasos = 0;
        System.out.println("NUMERO DE SEC INICIAL:" + nosecInicial);
        for (int i = 0; i <= registros; i++) {
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


        consulta.add(new ConsultaOii(nosec,paterno,materno,nombre,fec_nac,edad,fec_impe,claveoii,descoii));



        }

        Set<Integer> generado=new LinkedHashSet<>();
        for(ConsultaOii oii:consulta){
            generado.add(oii.getNosecuenc());
        }

        System.out.println("TODOSSSS" +generado.size());
        for(Integer valor:generado){
            System.out.println("valor  "+valor);
        }
    }
}
