package org.humber;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


/**
 * Created by campitos on 3/05/17.
 */
@Controller
public class ControladorInicial {

    @GetMapping("/hola2")
    public String hola(){
        return "hola.html";
    }

    @GetMapping("/")
    public String inicio(){
        return "index.html";
    }
}
