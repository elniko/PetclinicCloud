package com.sfeir.exam.petclinic.web.rest;

import com.sfeir.exam.petclinic.dao.VetDao;
import com.sfeir.exam.petclinic.domain.Vet;
import com.sfeir.exam.petclinic.reference.Specialty;
import org.joda.time.format.DateTimeFormat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.core.convert.converter.Converter;
import org.springframework.core.convert.support.GenericConversionService;
import org.springframework.http.HttpStatus;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

@RequestMapping("/api/vets")
@RestController
public class VetRestController {

    @Autowired
    private VetDao vetDao;

    @RequestMapping(method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@Valid @RequestBody Vet vet, BindingResult result) {
        if (vet == null)
            throw new IllegalArgumentException("A vet is required");
        if (result.hasErrors()) {
            throw new RuntimeException("Vet validation error");
        }
        vetDao.persist(vet);
    }



    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Vet show(@PathVariable("id") Long id) {
        if (id == null)
            throw new IllegalArgumentException("An Identifier is required");

        return vetDao.findVet(id);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Vet> list(
            @RequestParam(value = "page", required = false) Integer page,
            @RequestParam(value = "size", required = false) Integer size) {
        if (page != null || size != null) {
            int sizeNo = size == null ? 10 : size.intValue();
            return vetDao.findVetEntries(page == null ? 0 : (page.intValue() - 1) * sizeNo, sizeNo);
        } else {
            return  vetDao.findAllVets();
        }
    }

    @RequestMapping(method = RequestMethod.PUT)
    public void update(@RequestBody @Valid Vet vet, BindingResult result) {
        if (vet == null)
            throw new IllegalArgumentException("A vet is required");

        if (result.hasErrors()) {
            throw new RuntimeException("Vet validation error");
        }
        vetDao.merge(vet);
    }


    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        if (id == null)
            throw new IllegalArgumentException("An Identifier is required");
        vetDao.remove(id);
    }

    public Collection<Specialty> populateSpecialtys() {
        return Arrays.asList(Specialty.class.getEnumConstants());
    }

}
