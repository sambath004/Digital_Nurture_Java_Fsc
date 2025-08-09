package com.example.loanservice.controller;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/loans")
public class LoanController {

    @GetMapping("/{accountNumber}")
    public Map<String, Object> getLoanDetails(@PathVariable String accountNumber) {
        return Map.of(
            "id", accountNumber,
            "type", "home-loan",
            "amount", 500000
        );
    }
}
