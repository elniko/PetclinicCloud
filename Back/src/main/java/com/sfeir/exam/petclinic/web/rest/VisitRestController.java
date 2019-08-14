package com.sfeir.exam.petclinic.web.rest;

import com.sfeir.exam.petclinic.dao.PetDao;
import com.sfeir.exam.petclinic.dao.VetDao;
import com.sfeir.exam.petclinic.dao.VisitDao;
import com.sfeir.exam.petclinic.domain.Pet;
import com.sfeir.exam.petclinic.domain.Vet;
import com.sfeir.exam.petclinic.domain.Visit;
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
import java.util.Collection;
import java.util.Date;
import java.util.List;

@RequestMapping("/api/visits")
@RestController
public class VisitRestController {

    @Autowired
    private VisitDao visitDao;

    @Autowired
    private PetDao petDao;

    @Autowired
    private VetDao vetDao;

    @RequestMapping(method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@Valid Visit visit, BindingResult result) {
        if (visit == null)
            throw new IllegalArgumentException("A visit is required");
        if (result.hasErrors()) {
            throw new RuntimeException("Visit validation error");
        }
        visitDao.persist(visit);
    }


    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Visit show(@PathVariable Long id) {
        if (id == null)
            throw new IllegalArgumentException("An Identifier is required");

        return visitDao.findVisit(id);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Visit> list(
            @RequestParam(value = "page", required = false) Integer page,
            @RequestParam(value = "size", required = false) Integer size) {
        if (page != null || size != null) {
            int sizeNo = size == null ? 10 : size;
            return visitDao.findVisitEntries(page == null ? 0 : (page - 1) * sizeNo, sizeNo);
        } else {
            return visitDao.findAllVisits();
        }
    }

    @RequestMapping(method = RequestMethod.PUT)
    public void update(@Valid Visit visit, BindingResult result) {
        if (visit == null)
            throw new IllegalArgumentException("A visit is required");
        if (result.hasErrors()) {
            throw new RuntimeException("Visit validation error");
        }
        visitDao.merge(visit);
    }


    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") Long id) {
        if (id == null)
            throw new IllegalArgumentException("An Identifier is required");
        visitDao.remove(id);
    }


    @RequestMapping(params = "find=ByDescriptionAndVisitDate", method = RequestMethod.GET)
    public List findVisitsByDescriptionAndVisitDate(
            @RequestParam("description") String description,
            @RequestParam("visitDate") @org.springframework.format.annotation.DateTimeFormat(style = "S-") Date visitDate) {
        if (description == null || description.length() == 0)
            throw new IllegalArgumentException("A Description is required.");
        if (visitDate == null)
            throw new IllegalArgumentException("A VisitDate is required.");
        return visitDao.findVisitsByDescriptionAndVisitDate(description, visitDate).getResultList();
    }


    @RequestMapping(params = "find=ByVisitDateBetween", method = RequestMethod.GET)
    public List findVisitsByVisitDateBetween(
            @RequestParam("minVisitDate") @org.springframework.format.annotation.DateTimeFormat(style = "S-") Date minVisitDate,
            @RequestParam("maxVisitDate") @org.springframework.format.annotation.DateTimeFormat(style = "S-") Date maxVisitDate,
            ModelMap modelMap) {
        if (minVisitDate == null)
            throw new IllegalArgumentException("A MinVisitDate is required.");
        if (maxVisitDate == null)
            throw new IllegalArgumentException("A MaxVisitDate is required.");
        return visitDao.findVisitsByVisitDateBetween(minVisitDate, maxVisitDate).getResultList();
    }


    @RequestMapping(params = "find=ByDescriptionLike", method = RequestMethod.GET)
    public List findVisitsByDescriptionLike(@RequestParam String description) {
        if (description == null || description.length() == 0)
            throw new IllegalArgumentException("A Description is required.");
        return visitDao.findVisitsByDescriptionLike(description).getResultList();
    }

    public Collection<Pet> populatePets() {
        return petDao.findAllPets();
    }

    public Collection<Vet> populateVets() {
        return vetDao.findAllVets();
    }


    void addDateTimeFormatPatterns(ModelMap modelMap) {
        modelMap.addAttribute(
                "visit_maxvisitdate_date_format",
                DateTimeFormat.patternForStyle("S-",
                        LocaleContextHolder.getLocale()));
        modelMap.addAttribute(
                "visit_minvisitdate_date_format",
                DateTimeFormat.patternForStyle("S-",
                        LocaleContextHolder.getLocale()));
        modelMap.addAttribute(
                "visit_visitdate_date_format",
                DateTimeFormat.patternForStyle("S-",
                        LocaleContextHolder.getLocale()));
    }


}
