package org.humber;

import org.springframework.data.annotation.Id;

/**
 * Created by campitos on 3/05/17.
 */
public class Mensaje {
    @Id
    String id;
    String titulo;
    String cuerpo;

}
