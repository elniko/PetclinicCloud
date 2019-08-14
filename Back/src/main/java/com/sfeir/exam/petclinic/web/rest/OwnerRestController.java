package com.sfeir.exam.petclinic.web.rest;

import com.sfeir.exam.petclinic.dao.OwnerDao;
import com.sfeir.exam.petclinic.dao.PetDao;
import com.sfeir.exam.petclinic.domain.Owner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("/api/owners")
@RestController
public class OwnerRestController {

    @Autowired
    private OwnerDao ownerDao;

    @Autowired
    private PetDao petDao;

    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(code = HttpStatus.CREATED)
    public void create(@RequestBody @Valid Owner owner, BindingResult result) {
        if (owner == null)
            throw new IllegalArgumentException("A owner is required");
        if (result.hasErrors()) {
            throw new RuntimeException("Owner validation error");
        }
        ownerDao.persist(owner);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Owner show(@PathVariable("id") Long id) {
        if (id == null)
            throw new IllegalArgumentException("An Identifier is required");
        return ownerDao.findOwner(id);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Owner> list(@RequestParam(value = "page", required = false) Integer page,
                            @RequestParam(value = "size", required = false) Integer size
    ) {
        if (page != null || size != null) {
            int sizeNo = size == null ? 10 : size;
            return ownerDao.findOwnerEntries(page == null ? 0 : (page - 1) * sizeNo, sizeNo);
        } else {
            return ownerDao.findAllOwners();
        }
    }

    @RequestMapping(method = RequestMethod.PUT)
    @ResponseStatus(code = HttpStatus.OK)
    public void update(@RequestBody @Valid Owner owner, BindingResult result) {
        if (owner == null)
            throw new IllegalArgumentException("A owner is required");
        if (result.hasErrors()) {
            throw new RuntimeException("Owner validation error");
        }
        ownerDao.merge(owner);
    }


    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        if (id == null)
            throw new IllegalArgumentException("An Identifier is required");
        ownerDao.remove(id);
    }


}
