import { CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";

import prisma from "../database";

export async function getBooks() {
  const result = await prisma.books.findMany()
  return result;
}

export async function getBook(id: number) {
  const result = await prisma.books.findUnique({where:{id}})
  return result;
}

export async function createBook(book: CreateBook) {
  const result = await prisma.books.create({ data: book })

  return result;
}

export async function reviewBook(bookReview: CreateReview) {
  const result = await prisma.books.update({
    data: bookReview,
    where: {id: bookReview.bookId}
  })
  return result;
}