package com.library1.service;

import com.library1.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayBooks() {
    	System.out.println("This is Exercise 1 - Maven Spring Setup Successful!");
        System.out.println("BookService: Preparing to display books...");
        bookRepository.findAllBooks();
    }
}
