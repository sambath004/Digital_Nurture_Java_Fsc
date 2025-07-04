package com.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class MathUtilsTest {

    @Test
    public void testAdd() {
        MathUtils utils = new MathUtils();
        assertEquals(7, utils.add(3, 4));
    }

    @Test
    public void testIsEven() {
        MathUtils utils = new MathUtils();
        assertTrue(utils.isEven(6));
        assertFalse(utils.isEven(5));
    }

    @Test
    public void testGreetingNotNull() {
        MathUtils utils = new MathUtils();
        assertNotNull(utils.getGreeting());
    }
}
}