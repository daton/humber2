package org.humber;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Humber2Application implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(Humber2Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		ModeloOii modeloOii=new ModeloOii();
		System.out.println(modeloOii.leer());
	}
}
