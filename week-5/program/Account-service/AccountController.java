package com.example.account.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Map;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    @Autowired
    private RestTemplate restTemplate;

    @GetMapping("/{number}")
    public Map<String, Object> getAccountDetails(@PathVariable String number) {
        // Account info
        Map<String, Object> accountDetails = Map.of(
            "number", number,
            "type", "savings",
            "balance", 234343
        );

        // Fetch loan info from Loan Service
        String loanServiceUrl = "http://localhost:8081/loans/" + number;
        Map<String, Object> loanDetails = restTemplate.getForObject(loanServiceUrl, Map.class);

        // Combine both
        return Map.of(
            "account", accountDetails,
            "loan", loanDetails
        );
    }
}
