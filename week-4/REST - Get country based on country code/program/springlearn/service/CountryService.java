package com.cognizant.springlearn.service;

import com.cognizant.springlearn.model.Country;
import org.springframework.stereotype.Service;
import org.springframework.core.io.ClassPathResource;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import java.util.ArrayList;
import java.util.List;
import java.io.InputStream;
import java.util.Optional;

@Service
public class CountryService {

    private List<Country> countryList;

    public CountryService() {
        loadCountriesFromXml();
    }

    private void loadCountriesFromXml() {
        countryList = new ArrayList<>();
        try {
            ClassPathResource resource = new ClassPathResource("country.xml");
            InputStream inputStream = resource.getInputStream();

            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
            Document doc = dBuilder.parse(inputStream);
            doc.getDocumentElement().normalize();

            NodeList nList = doc.getElementsByTagName("country");

            for (int temp = 0; temp < nList.getLength(); temp++) {
                Element element = (Element) nList.item(temp);
                String code = element.getElementsByTagName("code").item(0).getTextContent();
                String name = element.getElementsByTagName("name").item(0).getTextContent();
                countryList.add(new Country(code, name));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public Country getCountry(String code) {
        Optional<Country> foundCountry = countryList.stream()
                .filter(country -> country.getCode().equalsIgnoreCase(code))
                .findFirst();

        return foundCountry.orElse(null);
    }
}