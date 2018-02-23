package org.humber;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

/**
 * Created by campitos on 3/05/17.
 */

public interface RepositorioOii extends MongoRepository<Oii,String>{

    List<Oii> findByPadecimiento(String padecimiento);
    Oii findByClave(String clave);
}
