package org.humber;

/**
 * Created by campitos on 6/05/17.
 */
public class Modelo {

 public static int    obtenerIndice(String accion){
        int indice=3;
        if(accion.equalsIgnoreCase("aceptar"))indice=0;
        if(accion.equalsIgnoreCase("revision"))indice=1;
        if(accion.equalsIgnoreCase("sin beneficios"))indice=2;
        if(accion.equalsIgnoreCase("rechazo"))indice=3;
        return indice;
    }

    public static String obteneraccion(int indice){
       String accion="No revisar";
        if(indice==0)accion="aceptar";
        if(indice==1)accion="revision";
        if(indice==2)accion="sin beneficio";
        if(indice==3)accion="rechazo";
        return accion;
    }

}
