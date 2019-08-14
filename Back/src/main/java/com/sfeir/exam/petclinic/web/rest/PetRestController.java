package com.sfeir.exam.petclinic.web.rest;

import com.sfeir.exam.petclinic.dao.OwnerDao;
import com.sfeir.exam.petclinic.dao.PetDao;
import com.sfeir.exam.petclinic.domain.Owner;
import com.sfeir.exam.petclinic.domain.Pet;
import com.sfeir.exam.petclinic.reference.PetType;
import org.springframework.beans.factory.annotation.Autowired;
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

@RequestMapping("/api/pets")
@RestController
public class PetRestController {

    @Autowired
    private PetDao petDao;

    @Autowired
    private OwnerDao ownerDao;

    @RequestMapping(method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@Valid Pet pet, BindingResult result) {
        if (pet == null)
            throw new IllegalArgumentException("A pet is required");
        if (result.hasErrors()) {
            throw new RuntimeException("Pet validation error");
        }
        petDao.persist(pet);
    }


    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Pet show(@PathVariable Long id){
        if (id == null || id < 0)
            throw new IllegalArgumentException("An Identifier is required");
        return petDao.findPet(id);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Pet> list(@RequestParam(value = "page", required = false) Integer page,
                          @RequestParam(value = "size", required = false) Integer size) {
        if (page != null || size != null) {
            int sizeNo = size == null ? 10 : size;
            return petDao.findPetEntries(page == null ? 0 : (page - 1) * sizeNo, sizeNo);
        } else {
            return petDao.findAllPets();
        }
    }

    @RequestMapping(method = RequestMethod.PUT)
    public void update(@Valid Pet pet, BindingResult result) {
        if (pet == null)
            throw new IllegalArgumentException("A pet is required");
        if (result.hasErrors()) {
            throw new RuntimeException("Pet validation error");
        }
        petDao.merge(pet);
    }


    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        if (id == null)
            throw new IllegalArgumentException("An Identifier is required");
        petDao.remove(id);
    }

    @RequestMapping(params = "find=ByNameAndWeight", method = RequestMethod.GET)
    public List findPetsByNameAndWeight(@RequestParam("name") String name, @RequestParam("weight") Float weight) {
        if (name == null || name.length() == 0)
            throw new IllegalArgumentException("A Name is required.");
        if (weight == null)
            throw new IllegalArgumentException("A Weight is required.");
        return petDao.findPetsByNameAndWeight(name, weight).getResultList();
    }

    @RequestMapping(params = "find=ByOwner", method = RequestMethod.GET)
    public List findPetsByOwner(@RequestParam("owner") Owner owner, ModelMap modelMap) {
        if (owner == null)
            throw new IllegalArgumentException("A Owner is required.");
        return petDao.findPetsByOwner(owner).getResultList();
    }


    @RequestMapping(params = "find=BySendRemindersAndWeightLessThan", method = RequestMethod.GET)
    public List findPetsBySendRemindersAndWeightLessThan(
            @RequestParam(value = "sendReminders", required = false) boolean sendReminders,
            @RequestParam("weight") Float weight) {
        if (weight == null)
            throw new IllegalArgumentException("A Weight is required.");
        return petDao.findPetsBySendRemindersAndWeightLessThan(sendReminders, weight).getResultList();

    }

    @RequestMapping(params = "find=ByTypeAndNameLike", method = RequestMethod.GET)
    public List findPetsByTypeAndNameLike(@RequestParam PetType type, @RequestParam String name) {
        if (type == null)
            throw new IllegalArgumentException("A Type is required.");
        if (name == null || name.length() == 0)
            throw new IllegalArgumentException("A Name is required.");

         return petDao.findPetsByTypeAndNameLike(type, name).getResultList();
    }

    public Collection<Owner> populateOwners() {
        return ownerDao.findAllOwners();
    }

    public Collection<PetType> populatePetTypes() {
        return Arrays.asList(PetType.class.getEnumConstants());
    }


}
