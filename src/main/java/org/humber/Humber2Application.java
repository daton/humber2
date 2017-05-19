package org.humber;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Humber2Application implements CommandLineRunner{
@Autowired RepositorioOii repo;
	public static void main(String[] args) {
		SpringApplication.run(Humber2Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		ModeloOii modeloOii=new ModeloOii();
		//System.out.println(modeloOii.leer());
/*
		XSSFSheet hoja= modeloOii.obtenerHoja("oii2016tiempo.xlsx",0);
		int ultimaFila=hoja.getLastRowNum();
		System.out.println("Numero de filas "+ultimaFila);
		for(int i=1;i<=ultimaFila;i++){
			String padecimiento=hoja.getRow(i).getCell(0).getStringCellValue();
			String clave=hoja.getRow(i).getCell(1).getStringCellValue();
			Integer bas_tiempo=(int)(hoja.getRow(i).getCell(2).getNumericCellValue());
			String accion=hoja.getRow(i).getCell(3).getStringCellValue();
			Float bas_extraprima=(float)(hoja.getRow(i).getCell(4).getNumericCellValue());

			Oii oii=new Oii(clave,padecimiento,  bas_tiempo,  accion, bas_extraprima);
			repo.save(oii);

			/*
			if(i==1){


                       Oii oii=new Oii(clave,padecimiento,  bas_tiempo,  accion, bas_extraprima);
				System.out.println(oii);
			}
			if(i==ultimaFila){
				Oii oii=new Oii(clave,padecimiento,  bas_tiempo,  accion, bas_extraprima);
				System.out.println(oii);
			}

			*/
           Oii oii=     repo.findOne("C6200");



		System.out.println("Accion :  "+oii.getAccion()+", estado :  "+oii);
		}

	}

