package com.sfeir.exam.petclinic.web.rest;

import com.sfeir.exam.petclinic.dao.OwnerDao;
import com.sfeir.exam.petclinic.dao.PetDao;
import com.sfeir.exam.petclinic.domain.Owner;
import com.sfeir.exam.petclinic.domain.Pet;
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
import java.util.List;

@RequestMapping("/api/owners")
@RestController
public class OwnerRestController {

	@Autowired
	private OwnerDao ownerDao;
	
	@Autowired
	private PetDao petDao;

	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(code = HttpStatus.CREATED)
	public void create(@Valid Owner owner, BindingResult result) {
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
	public void update(@Valid Owner owner, BindingResult result) {
		if (owner == null)
			throw new IllegalArgumentException("A owner is required");
		if (result.hasErrors()) {
			throw new RuntimeException("Owner validation error");
		}
		ownerDao.merge(owner);
	}



	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable("id") Long id,
			@RequestParam(value = "page", required = false) Integer page,
			@RequestParam(value = "size", required = false) Integer size) {
		if (id == null)
			throw new IllegalArgumentException("An Identifier is required");
		ownerDao.remove(id);
	}

	@ModelAttribute("pets")
	public Collection<Pet> populatePets() {
		return petDao.findAllPets();
	}

	Converter<Owner, String> getOwnerConverter() {
		return new Converter<Owner, String>() {
			public String convert(Owner owner) {
				return new StringBuilder().append(owner.getFirstName())
						.append(" ").append(owner.getLastName()).append(" ")
						.append(owner.getAddress()).toString();
			}
		};
	}

	Converter<Pet, String> getPetConverter() {
		return new Converter<Pet, String>() {
			public String convert(Pet pet) {
				return new StringBuilder().append(pet.getName()).append(" ")
						.append(pet.getWeight()).toString();
			}
		};
	}

	@InitBinder
	void registerConverters(WebDataBinder binder) {
		if (binder.getConversionService() instanceof GenericConversionService) {
			GenericConversionService conversionService = (GenericConversionService) binder
					.getConversionService();
			conversionService.addConverter(getOwnerConverter());
			conversionService.addConverter(getPetConverter());
		}
	}

	public void setOwnerDao(OwnerDao ownerDao) {
		this.ownerDao = ownerDao;
	}

	public void setPetDao(PetDao petDao) {
		this.petDao = petDao;
	}
}
