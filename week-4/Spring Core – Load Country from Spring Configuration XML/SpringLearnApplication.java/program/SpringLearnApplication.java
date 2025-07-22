package com.example.main;

import com.example.model.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

public class SpringLearnApplication {
    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        displayCountries();
    }

    public static void displayCountries() {
        LOGGER.debug("START displayCountries");

        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        List<Country> countryList = (List<Country>) context.getBean("countryList");

        for (Country country : countryList) {
            LOGGER.debug("Country: {}", country);
        }

        LOGGER.debug("END displayCountries");
    }
}
