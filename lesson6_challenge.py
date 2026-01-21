"""Task 1: Create a dictionary for a book with keys: title, author, year, pages. Print it in a nice format.

Task 2: Given this inventory:
inventory = {
     "apples": 50,
      "bananas": 25,
      "oranges": 30,
      "grapes": 0
  }
  - Add "mangoes" with quantity 15
  - Update "bananas" to 40
  - Print all items that have quantity > 0

  Task 3: Create a simple contact book with at least 3 people. Each person should have a name, phone, and email. Then loop through and print each contact's info.

  Show me your code!
"""

books = {"Title": "Dertogada", "Author": "Yismake Werku", "Year": 2010, "Pages": 340}
print(
    f"Title: {books.get("Title")}\nAuthor: {books.get("Author")}\nYear published: {books.get("Year")}\nPages: {books.get("Pages")}"
)

inventory = {"apples": 50, "bananas": 25, "oranges": 30, "grapes": 0}

inventory["mangoes"] = 15
inventory["bananas"] = 40

for fruit in inventory:
    if inventory[fruit] > 0:
        print(fruit)
contact_book = {
    "person1": {
        "name": "Yonas",
        "phone": "3417993003",
        "Email": "yonasmelkie@gmail.com",
    },
    "person2": {"name": "Jack", "phone": "5103348250", "Email": "Jack@yahoo.com"},
    "person3": {"name": "Bereket", "phone": "0914057890", "Email": "beki@gmail.com"},
}
for person in contact_book:
    print(contact_book[person])
