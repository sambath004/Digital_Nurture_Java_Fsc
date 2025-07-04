package com.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class SimpleCalculatorTest {

    @Test
    public void testAdd() {
        Calculator calc = new Calculator();
        assertEquals(10, calc.add(7, 3));
    }

    @Test
    public void testSubtract() {
        Calculator calc = new Calculator();
        assertEquals(4, calc.subtract(7, 3));
    }
}

