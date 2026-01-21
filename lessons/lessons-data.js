/**
 * Lesson Data - Deep Dive Python Learning
 * Comprehensive lessons with Easy, Medium, and Hard challenges
 */

const LESSONS = [
    {
        id: 1,
        title: "Hello, Python!",
        content: `
            <h1>Hello, Python!</h1>
            <p>Every programmer starts here, but let's understand <em>why</em> this works.</p>

            <h2>What is print()?</h2>
            <p><code>print()</code> is a <strong>built-in function</strong>. Functions are reusable blocks of code that perform specific tasks. Python comes with dozens of built-in functions - <code>print()</code> sends output to the console.</p>

            <h2>Strings and Quotes</h2>
            <p>Text in Python is called a <strong>string</strong>. Strings must be wrapped in quotes:</p>
            <pre><code># All of these are valid strings:
"Hello"      # Double quotes
'Hello'      # Single quotes
"""Hello"""  # Triple quotes (for multi-line)

# But NOT this:
Hello        # Error! Python thinks this is a variable name</code></pre>

            <h2>Why Quotes Matter</h2>
            <p>Without quotes, Python interprets words as <strong>identifiers</strong> (variable names, function names, etc.). Quotes tell Python "this is literal text, not code."</p>

            <h2>Escape Characters</h2>
            <p>What if your string contains a quote? Use the backslash <code>\\</code> to "escape" it:</p>
            <pre><code>print("She said \\"Hello\\"")  # Output: She said "Hello"
print('It\\'s working!')        # Output: It's working!

# Other escape characters:
print("Line 1\\nLine 2")        # \\n = newline
print("Tab\\there")             # \\t = tab</code></pre>

            <h2>Multiple print() Calls</h2>
            <p>Each <code>print()</code> outputs on a new line by default:</p>
            <pre><code>print("First")
print("Second")
# Output:
# First
# Second</code></pre>

            <h2>Printing Multiple Values</h2>
            <p>Pass multiple arguments separated by commas - Python adds spaces between them:</p>
            <pre><code>print("Hello", "World")   # Hello World
print("Sum:", 2 + 3)      # Sum: 5</code></pre>
        `,
        quiz: [
            {
                question: "What does <code>print()</code> do in Python?",
                options: [
                    "Stores data in a variable",
                    "Outputs text to the console",
                    "Creates a new file",
                    "Reads user input"
                ],
                correct: 1
            },
            {
                question: "Which of the following is a valid string in Python?",
                options: [
                    "Hello World",
                    "\"Hello World\"",
                    "print Hello",
                    "= Hello"
                ],
                correct: 1
            },
            {
                question: "What escape character creates a new line?",
                options: [
                    "\\\\t",
                    "\\\\n",
                    "\\\\r",
                    "\\\\b"
                ],
                correct: 1
            }
        ],
        challenges: {
            easy: {
                title: "Hello World",
                instructions: "Print exactly: <code>Hello, World!</code> - Pay attention to the comma, space, and exclamation mark.",
                starterCode: "# Your first Python program\n# Use print() with a string\n\n",
                validation: {
                    type: "output",
                    expected: "Hello, World!"
                },
                hints: [
                    "Strings need quotes around them",
                    "Check: do you have the comma after Hello?",
                    "The exact output should be: Hello, World!"
                ]
            },
            medium: {
                title: "Multiple Lines",
                instructions: "Print <code>Python</code> on the first line and <code>Programming</code> on the second line (use two print statements).",
                starterCode: "# Print two words on separate lines\n\n",
                validation: {
                    type: "output",
                    expected: "Python\nProgramming"
                },
                hints: [
                    "Use two separate print() statements",
                    "Each print() creates a new line automatically",
                    "print(\"Python\") then print(\"Programming\")"
                ]
            },
            hard: {
                title: "Escape Characters",
                instructions: "Print this exact output using escape characters: <code>He said \"Python's great!\"</code> (include the quotes in the output)",
                starterCode: "# Use escape characters to print quotes\n\n",
                validation: {
                    type: "output",
                    expected: "He said \"Python's great!\""
                },
                hints: [
                    "Use \\\" to include double quotes in a double-quoted string",
                    "Or use single quotes for the string and just escape the apostrophe",
                    "print(\"He said \\\"Python's great!\\\"\")"
                ]
            }
        }
    },
    {
        id: 2,
        title: "Variables & Types",
        content: `
            <h1>Variables & Data Types</h1>
            <p>Variables are <strong>named references</strong> to values stored in memory. Understanding types is crucial for writing correct code.</p>

            <h2>Dynamic Typing</h2>
            <p>Python is <strong>dynamically typed</strong> - you don't declare types, Python infers them:</p>
            <pre><code>x = 42          # x is an int
x = "hello"     # now x is a str (this is allowed!)
x = 3.14        # now x is a float</code></pre>
            <p>This flexibility is powerful but can cause bugs. Always know what type your variables hold.</p>

            <h2>The Four Core Types</h2>
            <pre><code># int - Whole numbers (unlimited size in Python!)
age = 25
big_num = 999999999999999999999  # No overflow!

# float - Decimal numbers (64-bit, has precision limits)
price = 19.99
scientific = 1.5e-10  # 0.00000000015

# str - Text (immutable sequences of characters)
name = "Alice"
empty = ""

# bool - True or False (note capitalization!)
is_active = True
is_deleted = False</code></pre>

            <h2>Type Checking & Conversion</h2>
            <pre><code># Check type with type()
print(type(42))        # &lt;class 'int'&gt;
print(type("hello"))   # &lt;class 'str'&gt;

# Convert between types
int("42")      # str to int: 42
str(42)        # int to str: "42"
float("3.14")  # str to float: 3.14
bool(0)        # int to bool: False (0 is falsy)
bool(1)        # int to bool: True (non-zero is truthy)</code></pre>

            <h2>Naming Rules</h2>
            <ul>
                <li>Must start with letter or underscore: <code>_count</code>, <code>name</code></li>
                <li>Can contain letters, numbers, underscores: <code>player_1</code></li>
                <li>Case-sensitive: <code>Name</code> ≠ <code>name</code></li>
                <li>Convention: use <code>snake_case</code> for variables</li>
            </ul>
        `,
        quiz: [
            {
                question: "What is Python's typing system called?",
                options: [
                    "Static typing",
                    "Strong typing",
                    "Dynamic typing",
                    "Weak typing"
                ],
                correct: 2
            },
            {
                question: "What does <code>type(42)</code> return?",
                options: [
                    "&lt;class 'str'&gt;",
                    "&lt;class 'int'&gt;",
                    "&lt;class 'float'&gt;",
                    "&lt;class 'num'&gt;"
                ],
                correct: 1
            },
            {
                question: "Which value is considered 'falsy' in Python?",
                options: [
                    "1",
                    "\"hello\"",
                    "0",
                    "[1, 2, 3]"
                ],
                correct: 2
            },
            {
                question: "What is the correct way to convert the string \"42\" to an integer?",
                options: [
                    "integer(\"42\")",
                    "int(\"42\")",
                    "str(42)",
                    "convert(\"42\")"
                ],
                correct: 1
            }
        ],
        challenges: {
            easy: {
                title: "Create Variables",
                instructions: "Create three variables: <code>name</code> (your name as string), <code>age</code> (a number), <code>height</code> (a decimal). Print the TYPE of each one using <code>type()</code>. Output should show str, int, float in that order.",
                starterCode: "# Create three variables of different types\n# Then print the TYPE of each one\n\n",
                validation: {
                    type: "output",
                    expected: "<class 'str'>\n<class 'int'>\n<class 'float'>"
                },
                hints: [
                    "Create: name = \"YourName\", age = 25, height = 5.9",
                    "Use print(type(variable)) for each one",
                    "Order matters: str first, then int, then float"
                ]
            },
            medium: {
                title: "Type Conversion",
                instructions: "Convert the string <code>\"42\"</code> to an integer and add 8 to it. Print the result.",
                starterCode: "# Convert string to int and add 8\ntext = \"42\"\n\n",
                validation: {
                    type: "output",
                    expected: "50"
                },
                hints: [
                    "Use int() to convert string to integer",
                    "int(\"42\") gives you the number 42",
                    "Then add 8 to it and print"
                ]
            },
            hard: {
                title: "Variable Swap",
                instructions: "Given <code>a = 10</code> and <code>b = 20</code>, swap their values (so a becomes 20 and b becomes 10) WITHOUT using a third variable. Then print a and b on separate lines.",
                starterCode: "# Swap a and b without using a third variable\na = 10\nb = 20\n\n# Swap here\n\nprint(a)\nprint(b)",
                validation: {
                    type: "output",
                    expected: "20\n10"
                },
                hints: [
                    "Python allows tuple unpacking: a, b = b, a",
                    "This swaps values in a single line",
                    "No temporary variable needed!"
                ]
            }
        }
    },
    {
        id: 3,
        title: "Operators Deep Dive",
        content: `
            <h1>Operators Deep Dive</h1>
            <p>Operators aren't just for math - understanding them deeply will make you a better programmer.</p>

            <h2>Arithmetic Operators</h2>
            <pre><code># The basics
10 + 3   # 13 (addition)
10 - 3   # 7  (subtraction)
10 * 3   # 30 (multiplication)
10 / 3   # 3.333... (true division - ALWAYS returns float!)
10 // 3  # 3  (floor division - rounds DOWN)
10 % 3   # 1  (modulo - remainder after division)
10 ** 3  # 1000 (exponentiation)

# Watch out for negative floor division!
-10 // 3  # -4 (not -3! It rounds toward negative infinity)</code></pre>

            <h2>Comparison Operators</h2>
            <pre><code>5 == 5   # True  (equal to)
5 != 3   # True  (not equal to)
5 > 3    # True  (greater than)
5 < 3    # False (less than)
5 >= 5   # True  (greater than or equal)
5 <= 3   # False (less than or equal)

# Chained comparisons (Python magic!)
1 < 5 < 10      # True (5 is between 1 and 10)
1 < 5 and 5 < 10  # Same thing, explicit</code></pre>

            <h2>Logical Operators</h2>
            <pre><code>True and True   # True (both must be true)
True and False  # False
True or False   # True (at least one true)
False or False  # False
not True        # False (inverts the value)

# Short-circuit evaluation
# Python stops as soon as it knows the answer
False and expensive_function()  # Never calls the function!
True or expensive_function()    # Never calls the function!</code></pre>

            <h2>Assignment Operators</h2>
            <pre><code>x = 10    # Basic assignment
x += 5    # Same as: x = x + 5  (now 15)
x -= 3    # Same as: x = x - 3  (now 12)
x *= 2    # Same as: x = x * 2  (now 24)
x //= 5   # Same as: x = x // 5 (now 4)
x **= 2   # Same as: x = x ** 2 (now 16)</code></pre>

            <h2>Operator Precedence</h2>
            <p>From highest to lowest: <code>**</code> → <code>* / // %</code> → <code>+ -</code> → <code>comparisons</code> → <code>not</code> → <code>and</code> → <code>or</code></p>
            <pre><code>2 + 3 * 4     # 14 (not 20! multiplication first)
2 ** 3 ** 2   # 512 (right-to-left: 3**2=9, then 2**9)
(2 + 3) * 4   # 20 (parentheses override precedence)</code></pre>
        `,
        quiz: [
            {
                question: "What is the result of <code>10 / 3</code> in Python 3?",
                options: [
                    "3",
                    "3.333...",
                    "3.0",
                    "Error"
                ],
                correct: 1
            },
            {
                question: "What operator gives the remainder of division?",
                options: [
                    "//",
                    "/",
                    "%",
                    "**"
                ],
                correct: 2
            },
            {
                question: "What is the result of <code>2 ** 3</code>?",
                options: [
                    "6",
                    "8",
                    "5",
                    "9"
                ],
                correct: 1
            },
            {
                question: "In <code>2 + 3 * 4</code>, what happens first?",
                options: [
                    "2 + 3",
                    "3 * 4",
                    "Both at same time",
                    "Left to right"
                ],
                correct: 1
            }
        ],
        challenges: {
            easy: {
                title: "Weeks and Days",
                instructions: "Calculate how many whole weeks are in 100 days, and how many leftover days remain. Print both values on separate lines (weeks first, then leftover days).",
                starterCode: "# Given 100 days, calculate:\n# 1. How many complete weeks? (use floor division //)\n# 2. How many leftover days? (use modulo %)\n\ndays = 100\n\n",
                validation: {
                    type: "output",
                    expected: "14\n2"
                },
                hints: [
                    "Weeks = days // 7 (floor division gives whole weeks)",
                    "Leftover = days % 7 (modulo gives remainder)",
                    "Print each result on its own line"
                ]
            },
            medium: {
                title: "Temperature Conversion",
                instructions: "Convert 98.6 degrees Fahrenheit to Celsius using the formula: <code>C = (F - 32) * 5/9</code>. Print the result rounded to 1 decimal place.",
                starterCode: "# Convert Fahrenheit to Celsius\nfahrenheit = 98.6\n\n",
                validation: {
                    type: "output",
                    expected: "37.0"
                },
                hints: [
                    "celsius = (fahrenheit - 32) * 5/9",
                    "Use round(value, 1) to round to 1 decimal",
                    "print(round(celsius, 1))"
                ]
            },
            hard: {
                title: "Digit Extraction",
                instructions: "Given a 3-digit number <code>num = 579</code>, extract and print each digit on a separate line (hundreds, tens, ones) using only arithmetic operators (no string conversion).",
                starterCode: "# Extract digits using arithmetic operators only\nnum = 579\n\n",
                validation: {
                    type: "output",
                    expected: "5\n7\n9"
                },
                hints: [
                    "Hundreds digit: num // 100",
                    "Tens digit: (num // 10) % 10 or (num % 100) // 10",
                    "Ones digit: num % 10"
                ]
            }
        }
    },
    {
        id: 4,
        title: "Control Flow Mastery",
        content: `
            <h1>Control Flow Mastery</h1>
            <p>Control flow determines which code runs and when. Mastering this is essential for writing real programs.</p>

            <h2>The if Statement</h2>
            <pre><code>temperature = 75

if temperature > 90:
    print("It's hot!")
    print("Stay hydrated!")  # Both lines run if condition is True</code></pre>
            <p><strong>Critical:</strong> The colon <code>:</code> and indentation (4 spaces) are required syntax, not style.</p>

            <h2>if-elif-else Chain</h2>
            <pre><code>score = 85

if score >= 90:
    grade = "A"
elif score >= 80:    # Only checked if first condition is False
    grade = "B"
elif score >= 70:
    grade = "C"
else:                # Catches everything else
    grade = "F"

print(grade)  # "B"</code></pre>
            <p><strong>Key insight:</strong> Only ONE block executes. Once a condition is True, Python skips the rest.</p>

            <h2>Truthy and Falsy Values</h2>
            <p>Any value can be used as a condition. These are <strong>falsy</strong> (evaluate to False):</p>
            <pre><code>False, None, 0, 0.0, "", [], {}, set()</code></pre>
            <p>Everything else is <strong>truthy</strong>:</p>
            <pre><code>if "hello":      # True (non-empty string)
    print("Strings are truthy!")

if [1, 2, 3]:    # True (non-empty list)
    print("Lists too!")

if 0:            # False (zero is falsy)
    print("Never prints")</code></pre>

            <h2>Nested Conditions</h2>
            <pre><code>age = 25
has_license = True

if age >= 18:
    if has_license:
        print("You can drive")
    else:
        print("Get a license first")
else:
    print("Too young to drive")

# Often cleaner with 'and':
if age >= 18 and has_license:
    print("You can drive")</code></pre>

            <h2>Ternary Operator</h2>
            <pre><code># One-line conditional
status = "adult" if age >= 18 else "minor"

# Equivalent to:
if age >= 18:
    status = "adult"
else:
    status = "minor"</code></pre>
        `,
        quiz: [
            {
                question: "What is required after an <code>if</code> statement in Python?",
                options: [
                    "Parentheses",
                    "A colon and indentation",
                    "Curly braces",
                    "The word 'then'"
                ],
                correct: 1
            },
            {
                question: "Which value is NOT falsy in Python?",
                options: [
                    "0",
                    "\"\"",
                    "[]",
                    "\"False\""
                ],
                correct: 3
            },
            {
                question: "In an if-elif-else chain, how many blocks can execute?",
                options: [
                    "All of them",
                    "At most one",
                    "At least one",
                    "Exactly two"
                ],
                correct: 1
            },
            {
                question: "What does <code>\"adult\" if age >= 18 else \"minor\"</code> represent?",
                options: [
                    "A syntax error",
                    "A ternary operator",
                    "A function call",
                    "A while loop"
                ],
                correct: 1
            }
        ],
        challenges: {
            easy: {
                title: "Number Classifier",
                instructions: "Write a program that checks a <code>number</code> variable (set to -5). Print <code>positive</code> if > 0, <code>negative</code> if < 0, or <code>zero</code> if exactly 0.",
                starterCode: "# Classify a number as positive, negative, or zero\nnumber = -5\n\n",
                validation: {
                    type: "output",
                    expected: "negative"
                },
                hints: [
                    "Start with: if number > 0:",
                    "Use elif for the second condition: elif number < 0:",
                    "Use else for zero (it's the only remaining option)"
                ]
            },
            medium: {
                title: "Grade Calculator",
                instructions: "Given <code>score = 85</code>, print the letter grade: A (90-100), B (80-89), C (70-79), D (60-69), F (below 60).",
                starterCode: "# Determine the letter grade\nscore = 85\n\n",
                validation: {
                    type: "output",
                    expected: "B"
                },
                hints: [
                    "Start with the highest grade: if score >= 90:",
                    "Use elif for each lower grade bracket",
                    "else handles F (below 60)"
                ]
            },
            hard: {
                title: "Leap Year Checker",
                instructions: "Given <code>year = 2024</code>, print <code>leap</code> if it's a leap year, <code>not leap</code> otherwise. Rule: divisible by 4, except century years must also be divisible by 400.",
                starterCode: "# Check if year is a leap year\nyear = 2024\n\n",
                validation: {
                    type: "output",
                    expected: "leap"
                },
                hints: [
                    "A year is a leap year if: (divisible by 4 AND not by 100) OR (divisible by 400)",
                    "Use % to check divisibility: year % 4 == 0",
                    "(year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)"
                ]
            }
        }
    },
    {
        id: 5,
        title: "Loops In Depth",
        content: `
            <h1>Loops In Depth</h1>
            <p>Loops are how programs do repetitive work. Understanding iteration patterns is fundamental.</p>

            <h2>The for Loop</h2>
            <p><code>for</code> iterates over any <strong>iterable</strong> (sequences, ranges, etc.):</p>
            <pre><code># Iterate over a list
for fruit in ["apple", "banana", "cherry"]:
    print(fruit)

# Iterate over a string (character by character)
for char in "Python":
    print(char)  # P, y, t, h, o, n

# Iterate over a range
for i in range(5):      # 0, 1, 2, 3, 4
    print(i)

for i in range(2, 8):   # 2, 3, 4, 5, 6, 7 (start, stop)
    print(i)

for i in range(0, 10, 2):  # 0, 2, 4, 6, 8 (start, stop, step)
    print(i)</code></pre>

            <h2>The while Loop</h2>
            <p><code>while</code> repeats as long as a condition is True:</p>
            <pre><code>count = 0
while count < 5:
    print(count)
    count += 1  # Don't forget this! Or infinite loop!</code></pre>

            <h2>break and continue</h2>
            <pre><code># break: Exit the loop immediately
for i in range(100):
    if i == 5:
        break  # Stop at 5
    print(i)   # Prints 0, 1, 2, 3, 4

# continue: Skip to next iteration
for i in range(5):
    if i == 2:
        continue  # Skip 2
    print(i)      # Prints 0, 1, 3, 4</code></pre>

            <h2>else Clause on Loops</h2>
            <p>Python's unique feature - <code>else</code> runs if loop completes without <code>break</code>:</p>
            <pre><code>for n in range(2, 10):
    for x in range(2, n):
        if n % x == 0:
            print(f"{n} = {x} * {n//x}")
            break
    else:  # No break occurred
        print(f"{n} is prime")</code></pre>

            <h2>enumerate() and zip()</h2>
            <pre><code># enumerate: Get index and value
fruits = ["apple", "banana", "cherry"]
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# zip: Iterate over multiple lists together
names = ["Alice", "Bob"]
ages = [25, 30]
for name, age in zip(names, ages):
    print(f"{name} is {age}")</code></pre>
        `,
        quiz: [
            {
                question: "What does <code>range(5)</code> produce?",
                options: [
                    "1, 2, 3, 4, 5",
                    "0, 1, 2, 3, 4",
                    "0, 1, 2, 3, 4, 5",
                    "5, 4, 3, 2, 1"
                ],
                correct: 1
            },
            {
                question: "What does <code>break</code> do in a loop?",
                options: [
                    "Skips to the next iteration",
                    "Exits the loop immediately",
                    "Restarts the loop",
                    "Pauses the loop"
                ],
                correct: 1
            },
            {
                question: "What does <code>continue</code> do in a loop?",
                options: [
                    "Exits the loop",
                    "Skips to the next iteration",
                    "Breaks the program",
                    "Continues after the loop"
                ],
                correct: 1
            },
            {
                question: "What does <code>enumerate()</code> return?",
                options: [
                    "Just the values",
                    "Just the indices",
                    "Index-value pairs",
                    "A sorted list"
                ],
                correct: 2
            }
        ],
        challenges: {
            easy: {
                title: "Sum 1 to 10",
                instructions: "Use a <code>for</code> loop to print the sum of all numbers from 1 to 10 (inclusive). Just print the final sum (55).",
                starterCode: "# Calculate sum of 1 + 2 + 3 + ... + 10\n# Hint: create a variable to accumulate the sum\n\n",
                validation: {
                    type: "output",
                    expected: "55"
                },
                hints: [
                    "Create a variable: total = 0",
                    "Loop with: for i in range(1, 11):  # 11 because stop is exclusive",
                    "Inside loop: total += i, then print total after the loop"
                ]
            },
            medium: {
                title: "Even Numbers",
                instructions: "Print all even numbers from 2 to 20 (inclusive), each on a new line.",
                starterCode: "# Print even numbers from 2 to 20\n\n",
                validation: {
                    type: "output",
                    expected: "2\n4\n6\n8\n10\n12\n14\n16\n18\n20"
                },
                hints: [
                    "Use range(2, 21, 2) to step by 2",
                    "Or use range(2, 21) and check if i % 2 == 0",
                    "Print each number in the loop"
                ]
            },
            hard: {
                title: "FizzBuzz",
                instructions: "Print numbers 1-15, but for multiples of 3 print <code>Fizz</code>, for multiples of 5 print <code>Buzz</code>, for multiples of both print <code>FizzBuzz</code>.",
                starterCode: "# FizzBuzz challenge\n\n",
                validation: {
                    type: "output",
                    expected: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz"
                },
                hints: [
                    "Check divisible by both 3 AND 5 first (15 is FizzBuzz, not Fizz)",
                    "Use i % 3 == 0 to check divisibility by 3",
                    "Order matters: check FizzBuzz before Fizz or Buzz"
                ]
            }
        }
    },
    {
        id: 6,
        title: "Lists Mastery",
        content: `
            <h1>Lists Mastery</h1>
            <p>Lists are Python's most versatile data structure. They're <strong>ordered</strong>, <strong>mutable</strong>, and can hold <strong>any type</strong>.</p>

            <h2>Creating and Accessing Lists</h2>
            <pre><code># Creation
empty = []
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]

# Indexing (0-based)
numbers[0]   # 1 (first element)
numbers[-1]  # 5 (last element)
numbers[-2]  # 4 (second to last)

# Slicing [start:stop:step]
numbers[1:4]    # [2, 3, 4] (indices 1, 2, 3)
numbers[:3]     # [1, 2, 3] (first 3)
numbers[2:]     # [3, 4, 5] (from index 2 onward)
numbers[::2]    # [1, 3, 5] (every other element)
numbers[::-1]   # [5, 4, 3, 2, 1] (reversed)</code></pre>

            <h2>Modifying Lists</h2>
            <pre><code>nums = [1, 2, 3]

# Adding elements
nums.append(4)       # [1, 2, 3, 4] - add to end
nums.insert(0, 0)    # [0, 1, 2, 3, 4] - insert at index
nums.extend([5, 6])  # [0, 1, 2, 3, 4, 5, 6] - add multiple

# Removing elements
nums.pop()           # Returns 6, list is now [0, 1, 2, 3, 4, 5]
nums.pop(0)          # Returns 0, list is now [1, 2, 3, 4, 5]
nums.remove(3)       # Removes first occurrence of 3

# Modifying in place
nums[0] = 10         # Replace first element
nums[1:3] = [20, 30] # Replace slice</code></pre>

            <h2>List Operations</h2>
            <pre><code>a = [1, 2, 3]
b = [4, 5, 6]

a + b         # [1, 2, 3, 4, 5, 6] (concatenation)
a * 3         # [1, 2, 3, 1, 2, 3, 1, 2, 3] (repetition)
len(a)        # 3
2 in a        # True (membership test)
7 not in a    # True

# Useful functions
min([3, 1, 4])   # 1
max([3, 1, 4])   # 4
sum([3, 1, 4])   # 8
sorted([3, 1, 4]) # [1, 3, 4] (returns new list)
[3, 1, 4].sort()  # Sorts in place, returns None!</code></pre>

            <h2>List Comprehensions</h2>
            <p>Powerful one-liners for creating lists:</p>
            <pre><code># Basic: [expression for item in iterable]
squares = [x**2 for x in range(5)]  # [0, 1, 4, 9, 16]

# With condition: [expr for item in iterable if condition]
evens = [x for x in range(10) if x % 2 == 0]  # [0, 2, 4, 6, 8]

# Nested comprehension
matrix = [[i*j for j in range(3)] for i in range(3)]
# [[0, 0, 0], [0, 1, 2], [0, 2, 4]]</code></pre>

            <h2>Common Pitfall: Aliasing</h2>
            <pre><code>a = [1, 2, 3]
b = a        # b points to SAME list!
b.append(4)
print(a)     # [1, 2, 3, 4] - a changed too!

# To copy:
b = a.copy()      # Shallow copy
b = a[:]          # Also shallow copy
b = list(a)       # Also works</code></pre>
        `,
        quiz: [
            {
                question: "What does <code>numbers[-1]</code> return for <code>[1, 2, 3, 4, 5]</code>?",
                options: [
                    "1",
                    "5",
                    "-1",
                    "Error"
                ],
                correct: 1
            },
            {
                question: "What is the syntax for a list comprehension?",
                options: [
                    "{x for x in list}",
                    "[x for x in list]",
                    "(x for x in list)",
                    "list(x for x in list)"
                ],
                correct: 1
            },
            {
                question: "What happens when you do <code>b = a</code> where a is a list?",
                options: [
                    "b becomes a copy of a",
                    "b points to the same list as a",
                    "b becomes an empty list",
                    "Error"
                ],
                correct: 1
            },
            {
                question: "What does <code>nums[1:4]</code> return for <code>[0, 1, 2, 3, 4, 5]</code>?",
                options: [
                    "[1, 2, 3]",
                    "[1, 2, 3, 4]",
                    "[0, 1, 2, 3]",
                    "[2, 3, 4]"
                ],
                correct: 0
            }
        ],
        challenges: {
            easy: {
                title: "Double Values",
                instructions: "Create a list <code>numbers = [1, 2, 3, 4, 5]</code>. Use a list comprehension to create <code>doubled</code> containing each number multiplied by 2. Print <code>doubled</code>.",
                starterCode: "# Create a list and use list comprehension to double each value\n\n",
                validation: {
                    type: "output",
                    expected: "[2, 4, 6, 8, 10]"
                },
                hints: [
                    "Start with: numbers = [1, 2, 3, 4, 5]",
                    "List comprehension: doubled = [x * 2 for x in numbers]",
                    "Then print(doubled)"
                ]
            },
            medium: {
                title: "Filter and Square",
                instructions: "From list <code>nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</code>, create a new list containing only the squares of even numbers. Print it.",
                starterCode: "# Filter even numbers and square them\nnums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\n",
                validation: {
                    type: "output",
                    expected: "[4, 16, 36, 64, 100]"
                },
                hints: [
                    "Use list comprehension with condition: [expr for x in nums if condition]",
                    "Filter with: if x % 2 == 0",
                    "result = [x**2 for x in nums if x % 2 == 0]"
                ]
            },
            hard: {
                title: "Reverse in Place",
                instructions: "Given <code>items = ['a', 'b', 'c', 'd', 'e']</code>, reverse it using slicing and print the result. The output should be a list.",
                starterCode: "# Reverse the list using slicing\nitems = ['a', 'b', 'c', 'd', 'e']\n\n",
                validation: {
                    type: "output",
                    expected: "['e', 'd', 'c', 'b', 'a']"
                },
                hints: [
                    "Slicing with step -1 reverses: list[::-1]",
                    "reversed_items = items[::-1]",
                    "Print the reversed list"
                ]
            }
        }
    },
    {
        id: 7,
        title: "Dictionaries Deep Dive",
        content: `
            <h1>Dictionaries Deep Dive</h1>
            <p>Dictionaries are <strong>key-value stores</strong> with O(1) lookup time. They're the backbone of Python data handling.</p>

            <h2>Creating Dictionaries</h2>
            <pre><code># Literal syntax
person = {"name": "Alice", "age": 30, "city": "NYC"}

# dict() constructor
person = dict(name="Alice", age=30, city="NYC")

# From list of tuples
person = dict([("name", "Alice"), ("age", 30)])

# Empty dict
empty = {}
empty = dict()</code></pre>

            <h2>Accessing Values</h2>
            <pre><code>person = {"name": "Alice", "age": 30}

# Direct access (raises KeyError if missing)
person["name"]  # "Alice"
person["email"] # KeyError!

# Safe access with .get() (returns None or default)
person.get("name")          # "Alice"
person.get("email")         # None
person.get("email", "N/A")  # "N/A" (custom default)

# Check if key exists
"name" in person     # True
"email" in person    # False</code></pre>

            <h2>Modifying Dictionaries</h2>
            <pre><code>person = {"name": "Alice"}

# Add or update
person["age"] = 30           # Add new key
person["name"] = "Bob"       # Update existing

# Update multiple at once
person.update({"city": "NYC", "age": 31})

# Remove
del person["city"]           # Remove key (KeyError if missing)
age = person.pop("age")      # Remove and return value
person.pop("missing", None)  # Safe removal with default

# Clear all
person.clear()</code></pre>

            <h2>Iterating Over Dictionaries</h2>
            <pre><code>scores = {"Alice": 95, "Bob": 87, "Charlie": 92}

# Keys (default)
for name in scores:
    print(name)  # Alice, Bob, Charlie

# Values
for score in scores.values():
    print(score)  # 95, 87, 92

# Both (most common)
for name, score in scores.items():
    print(f"{name}: {score}")</code></pre>

            <h2>Dictionary Comprehensions</h2>
            <pre><code># {key_expr: value_expr for item in iterable}
squares = {x: x**2 for x in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# With condition
evens = {x: x**2 for x in range(10) if x % 2 == 0}
# {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}

# Swap keys and values
original = {"a": 1, "b": 2}
swapped = {v: k for k, v in original.items()}
# {1: "a", 2: "b"}</code></pre>

            <h2>Nested Dictionaries</h2>
            <pre><code>users = {
    "alice": {"age": 30, "email": "alice@example.com"},
    "bob": {"age": 25, "email": "bob@example.com"}
}

users["alice"]["age"]  # 30
users["bob"]["email"]  # "bob@example.com"</code></pre>
        `,
        quiz: [
            {
                question: "What happens when you access a missing key with <code>dict[\"key\"]</code>?",
                options: [
                    "Returns None",
                    "Returns an empty string",
                    "Raises KeyError",
                    "Returns 0"
                ],
                correct: 2
            },
            {
                question: "What does <code>dict.get(\"key\", \"default\")</code> return if key is missing?",
                options: [
                    "None",
                    "KeyError",
                    "\"default\"",
                    "Empty string"
                ],
                correct: 2
            },
            {
                question: "How do you iterate over both keys and values in a dictionary?",
                options: [
                    "for k, v in dict:",
                    "for k, v in dict.items():",
                    "for k, v in dict.values():",
                    "for k, v in dict.keys():"
                ],
                correct: 1
            },
            {
                question: "What is the syntax for a dictionary comprehension?",
                options: [
                    "[k: v for k, v in items]",
                    "{k: v for k, v in items}",
                    "(k: v for k, v in items)",
                    "dict(k: v for k, v in items)"
                ],
                correct: 1
            }
        ],
        challenges: {
            easy: {
                title: "Discount Prices",
                instructions: "Create a dictionary <code>inventory</code> with items: apple=50, banana=30, orange=45. Use a dict comprehension to create <code>discounted</code> with prices reduced by 10. Print <code>discounted</code>.",
                starterCode: "# Create inventory dict and use comprehension to discount prices\n\n",
                validation: {
                    type: "output",
                    expected: "{'apple': 40, 'banana': 20, 'orange': 35}"
                },
                hints: [
                    "inventory = {'apple': 50, 'banana': 30, 'orange': 45}",
                    "Dict comprehension: {k: v - 10 for k, v in inventory.items()}",
                    "Print the discounted dictionary"
                ]
            },
            medium: {
                title: "Count Letters",
                instructions: "Count the occurrences of each character in <code>\"hello\"</code>. Print a dictionary with character counts.",
                starterCode: "# Count character occurrences\ntext = \"hello\"\n\n",
                validation: {
                    type: "output",
                    expected: "{'h': 1, 'e': 1, 'l': 2, 'o': 1}"
                },
                hints: [
                    "Create an empty dict, loop through text",
                    "For each char, increment count: counts[char] = counts.get(char, 0) + 1",
                    "Or use dict comprehension: {c: text.count(c) for c in text}"
                ]
            },
            hard: {
                title: "Invert Dictionary",
                instructions: "Given <code>grades = {'Alice': 'A', 'Bob': 'B', 'Charlie': 'A'}</code>, create an inverted dict where grades are keys and lists of names are values. Print it.",
                starterCode: "# Invert the dictionary (values become keys, keys become list values)\ngrades = {'Alice': 'A', 'Bob': 'B', 'Charlie': 'A'}\n\n",
                validation: {
                    type: "output",
                    expected: "{'A': ['Alice', 'Charlie'], 'B': ['Bob']}"
                },
                hints: [
                    "Create empty dict, loop through grades.items()",
                    "For each grade, append name to list: if grade not in result, create list",
                    "inverted.setdefault(grade, []).append(name)"
                ]
            }
        }
    },
    {
        id: 8,
        title: "Functions In Depth",
        content: `
            <h1>Functions In Depth</h1>
            <p>Functions are the building blocks of reusable code. Understanding them deeply is crucial for writing clean, maintainable Python.</p>

            <h2>Defining Functions</h2>
            <pre><code>def greet(name):
    """Greet a person by name."""  # Docstring
    return f"Hello, {name}!"

# Call the function
message = greet("Alice")  # "Hello, Alice!"</code></pre>

            <h2>Parameters vs Arguments</h2>
            <pre><code># Parameters: Variables in function definition
def add(a, b):  # a and b are parameters
    return a + b

# Arguments: Values passed when calling
add(3, 5)  # 3 and 5 are arguments</code></pre>

            <h2>Default Parameters</h2>
            <pre><code>def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

greet("Alice")           # "Hello, Alice!"
greet("Alice", "Hi")     # "Hi, Alice!"

# DANGER: Mutable default arguments
def append_to(element, target=[]):  # BUG!
    target.append(element)
    return target

# Fix with None:
def append_to(element, target=None):
    if target is None:
        target = []
    target.append(element)
    return target</code></pre>

            <h2>*args and **kwargs</h2>
            <pre><code># *args: Variable positional arguments (tuple)
def sum_all(*numbers):
    return sum(numbers)

sum_all(1, 2, 3, 4)  # 10

# **kwargs: Variable keyword arguments (dict)
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=30)

# Combined (order matters!)
def func(required, *args, default=0, **kwargs):
    pass</code></pre>

            <h2>Return Values</h2>
            <pre><code># Return nothing (implicitly returns None)
def say_hi():
    print("Hi!")
    # No return statement

result = say_hi()  # Prints "Hi!", result is None

# Return multiple values (tuple unpacking)
def min_max(numbers):
    return min(numbers), max(numbers)

lo, hi = min_max([3, 1, 4, 1, 5])  # lo=1, hi=5</code></pre>

            <h2>Scope and Closures</h2>
            <pre><code># Local vs Global scope
x = "global"

def func():
    x = "local"  # Creates NEW local variable
    print(x)     # "local"

func()
print(x)  # "global" (unchanged)

# Closures: Inner functions remember outer scope
def make_multiplier(n):
    def multiply(x):
        return x * n  # 'n' is captured from outer scope
    return multiply

double = make_multiplier(2)
double(5)  # 10</code></pre>

            <h2>Lambda Functions</h2>
            <pre><code># Anonymous single-expression functions
square = lambda x: x ** 2
square(5)  # 25

# Commonly used with map, filter, sorted
numbers = [3, 1, 4, 1, 5]
sorted(numbers, key=lambda x: -x)  # [5, 4, 3, 1, 1] (descending)</code></pre>
        `,
        quiz: [
            {
                question: "What does <code>*args</code> allow a function to accept?",
                options: [
                    "Only keyword arguments",
                    "Variable number of positional arguments",
                    "A single list argument",
                    "No arguments"
                ],
                correct: 1
            },
            {
                question: "What does a function return if there's no return statement?",
                options: [
                    "0",
                    "An empty string",
                    "None",
                    "Error"
                ],
                correct: 2
            },
            {
                question: "What is a closure?",
                options: [
                    "A function that closes the program",
                    "An inner function that remembers outer scope variables",
                    "A way to end a loop",
                    "A type of error"
                ],
                correct: 1
            },
            {
                question: "What is a lambda function?",
                options: [
                    "A function with no name",
                    "A function with multiple return values",
                    "An anonymous single-expression function",
                    "A recursive function"
                ],
                correct: 2
            }
        ],
        challenges: {
            easy: {
                title: "Average Calculator",
                instructions: "Write a function <code>calculate_average</code> that takes <code>*args</code> (variable number of numbers) and returns their average. Test it by printing <code>calculate_average(10, 20, 30, 40)</code>.",
                starterCode: "# Define a function that calculates average of any number of arguments\n\n",
                validation: {
                    type: "output",
                    expected: "25.0"
                },
                hints: [
                    "def calculate_average(*args):",
                    "Average = sum(args) / len(args)",
                    "Call: print(calculate_average(10, 20, 30, 40))"
                ]
            },
            medium: {
                title: "Power Function",
                instructions: "Write a function <code>power(base, exp=2)</code> with a default exponent of 2. Print <code>power(3)</code> (should be 9) and <code>power(2, 3)</code> (should be 8) on separate lines.",
                starterCode: "# Function with default parameter\n\n",
                validation: {
                    type: "output",
                    expected: "9\n8"
                },
                hints: [
                    "def power(base, exp=2):",
                    "return base ** exp",
                    "print(power(3)) then print(power(2, 3))"
                ]
            },
            hard: {
                title: "Make Multiplier",
                instructions: "Create a closure <code>make_multiplier(n)</code> that returns a function which multiplies its argument by n. Create <code>triple = make_multiplier(3)</code> and print <code>triple(10)</code>.",
                starterCode: "# Create a closure that makes multiplier functions\n\n",
                validation: {
                    type: "output",
                    expected: "30"
                },
                hints: [
                    "def make_multiplier(n): with inner function",
                    "Inner function: def multiply(x): return x * n",
                    "Return the inner function, then triple = make_multiplier(3)"
                ]
            }
        }
    },
    {
        id: 9,
        title: "Strings Mastery",
        content: `
            <h1>Strings Mastery</h1>
            <p>Strings are <strong>immutable sequences</strong> of characters. Mastering string manipulation is essential for data processing.</p>

            <h2>String Basics</h2>
            <pre><code># Strings are immutable - cannot change in place
s = "hello"
s[0] = "H"  # TypeError! Strings are immutable

# Must create a new string
s = "H" + s[1:]  # "Hello"</code></pre>

            <h2>String Methods</h2>
            <pre><code>text = "  Hello, World!  "

# Case conversion
text.upper()      # "  HELLO, WORLD!  "
text.lower()      # "  hello, world!  "
text.title()      # "  Hello, World!  "
text.swapcase()   # "  hELLO, wORLD!  "

# Whitespace handling
text.strip()      # "Hello, World!" (both sides)
text.lstrip()     # "Hello, World!  " (left only)
text.rstrip()     # "  Hello, World!" (right only)

# Finding and replacing
text.find("World")     # 9 (index, -1 if not found)
text.count("l")        # 3
text.replace("World", "Python")  # "  Hello, Python!  "

# Checking content
"hello".isalpha()    # True (only letters)
"123".isdigit()      # True (only digits)
"Hello".startswith("He")  # True
"Hello".endswith("lo")    # True</code></pre>

            <h2>Splitting and Joining</h2>
            <pre><code># Split into list
"a,b,c".split(",")        # ["a", "b", "c"]
"hello world".split()     # ["hello", "world"] (whitespace)

# Join list into string
"-".join(["a", "b", "c"]) # "a-b-c"
" ".join(["Hello", "World"])  # "Hello World"</code></pre>

            <h2>String Formatting</h2>
            <pre><code>name = "Alice"
age = 30

# f-strings (Python 3.6+) - BEST option
f"Name: {name}, Age: {age}"

# Formatting expressions
f"{3.14159:.2f}"          # "3.14" (2 decimal places)
f"{42:05d}"               # "00042" (zero-padded)
f"{1000000:,}"            # "1,000,000" (comma separator)
f"{'test':>10}"           # "      test" (right-align)
f"{'test':<10}"           # "test      " (left-align)
f"{'test':^10}"           # "   test   " (center)</code></pre>

            <h2>String Slicing</h2>
            <pre><code>s = "Python"
s[0]       # "P" (first char)
s[-1]      # "n" (last char)
s[0:3]     # "Pyt" (indices 0, 1, 2)
s[::2]     # "Pto" (every other char)
s[::-1]    # "nohtyP" (reversed)</code></pre>
        `,
        quiz: [
            {
                question: "Are strings mutable or immutable in Python?",
                options: [
                    "Mutable",
                    "Immutable",
                    "Sometimes mutable",
                    "Neither"
                ],
                correct: 1
            },
            {
                question: "What does <code>\"hello\".upper()</code> return?",
                options: [
                    "\"Hello\"",
                    "\"HELLO\"",
                    "\"hello\"",
                    "Error"
                ],
                correct: 1
            },
            {
                question: "What does <code>\"a,b,c\".split(\",\")</code> return?",
                options: [
                    "\"abc\"",
                    "[\"a\", \"b\", \"c\"]",
                    "(\"a\", \"b\", \"c\")",
                    "\"a b c\""
                ],
                correct: 1
            },
            {
                question: "What does <code>s[::-1]</code> do to a string?",
                options: [
                    "Returns the first character",
                    "Returns the last character",
                    "Reverses the string",
                    "Removes spaces"
                ],
                correct: 2
            }
        ],
        challenges: {
            easy: {
                title: "Title and Split",
                instructions: "Given <code>text = \"python programming is fun\"</code>, transform it to title case and then split it into a list of words. Print the resulting list.",
                starterCode: "# Transform to title case, then split into words\ntext = \"python programming is fun\"\n\n",
                validation: {
                    type: "output",
                    expected: "['Python', 'Programming', 'Is', 'Fun']"
                },
                hints: [
                    "First apply .title() to capitalize each word",
                    "Then apply .split() to break into list",
                    "Chain them: text.title().split()"
                ]
            },
            medium: {
                title: "Word Counter",
                instructions: "Count how many words are in <code>\"The quick brown fox jumps over the lazy dog\"</code> and print the count.",
                starterCode: "# Count words in the sentence\nsentence = \"The quick brown fox jumps over the lazy dog\"\n\n",
                validation: {
                    type: "output",
                    expected: "9"
                },
                hints: [
                    "Split the sentence into words",
                    "Use len() to count the list",
                    "print(len(sentence.split()))"
                ]
            },
            hard: {
                title: "Palindrome Check",
                instructions: "Check if <code>\"racecar\"</code> is a palindrome (same forwards and backwards). Print <code>True</code> or <code>False</code>.",
                starterCode: "# Check if string is a palindrome\nword = \"racecar\"\n\n",
                validation: {
                    type: "output",
                    expected: "True"
                },
                hints: [
                    "A palindrome reads the same forwards and backwards",
                    "Reverse with slicing: word[::-1]",
                    "Compare: word == word[::-1]"
                ]
            }
        }
    },
    {
        id: 10,
        title: "Error Handling",
        content: `
            <h1>Error Handling</h1>
            <p>Errors are inevitable. Professional code anticipates and handles them gracefully using <strong>try/except</strong> blocks.</p>

            <h2>The try/except Block</h2>
            <pre><code>try:
    result = 10 / 0  # This will raise ZeroDivisionError
except ZeroDivisionError:
    print("Cannot divide by zero!")

# Program continues normally after handling the error</code></pre>

            <h2>Common Exception Types</h2>
            <pre><code># ValueError - Wrong value type
int("hello")  # ValueError: invalid literal

# TypeError - Wrong operation for type
"hello" + 5   # TypeError: can only concatenate str

# KeyError - Dictionary key not found
d = {"a": 1}
d["b"]        # KeyError: 'b'

# IndexError - List index out of range
lst = [1, 2, 3]
lst[10]       # IndexError: list index out of range</code></pre>

            <h2>Multiple Except Clauses</h2>
            <pre><code>try:
    value = int(input("Enter a number: "))
    result = 10 / value
except ValueError:
    print("That's not a valid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
except Exception as e:
    print(f"Unexpected error: {e}")  # Catch-all (use sparingly)</code></pre>

            <h2>else and finally</h2>
            <pre><code>try:
    result = 10 / 2
except ZeroDivisionError:
    print("Error!")
else:
    # Runs ONLY if no exception occurred
    print(f"Result: {result}")
finally:
    # ALWAYS runs, even if exception occurred
    print("Cleanup complete")</code></pre>

            <h2>Raising Exceptions</h2>
            <pre><code>def validate_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    if age > 150:
        raise ValueError("Age seems unrealistic")
    return age

try:
    validate_age(-5)
except ValueError as e:
    print(f"Invalid age: {e}")</code></pre>
        `,
        quiz: [
            {
                question: "What keyword is used to catch exceptions in Python?",
                options: [
                    "catch",
                    "except",
                    "handle",
                    "error"
                ],
                correct: 1
            },
            {
                question: "What exception is raised when dividing by zero?",
                options: [
                    "ValueError",
                    "TypeError",
                    "ZeroDivisionError",
                    "MathError"
                ],
                correct: 2
            },
            {
                question: "What does the <code>finally</code> block do?",
                options: [
                    "Runs only if an exception occurs",
                    "Runs only if no exception occurs",
                    "Always runs, regardless of exceptions",
                    "Ends the program"
                ],
                correct: 2
            },
            {
                question: "How do you manually raise an exception?",
                options: [
                    "throw Exception()",
                    "raise Exception()",
                    "error Exception()",
                    "except Exception()"
                ],
                correct: 1
            }
        ],
        challenges: {
            easy: {
                title: "Safe Division",
                instructions: "Write a function <code>safe_divide(a, b)</code> that returns a/b, but returns <code>0</code> if b is zero (using try/except). Print the result of <code>safe_divide(10, 0)</code>.",
                starterCode: "# Create a safe division function that handles ZeroDivisionError\n\n",
                validation: {
                    type: "output",
                    expected: "0"
                },
                hints: [
                    "def safe_divide(a, b): with try/except inside",
                    "try: return a / b",
                    "except ZeroDivisionError: return 0"
                ]
            },
            medium: {
                title: "Safe Integer Conversion",
                instructions: "Write a function <code>safe_int(value)</code> that converts to int, returning <code>0</code> if conversion fails. Test with <code>safe_int(\"hello\")</code> and print the result.",
                starterCode: "# Convert string to int safely\n\n",
                validation: {
                    type: "output",
                    expected: "0"
                },
                hints: [
                    "def safe_int(value): with try/except",
                    "try: return int(value)",
                    "except ValueError: return 0"
                ]
            },
            hard: {
                title: "Validate Positive",
                instructions: "Write <code>validate_positive(n)</code> that raises <code>ValueError</code> with message <code>\"Must be positive\"</code> if n <= 0, otherwise returns n. Call it with -5 in a try/except and print the error message.",
                starterCode: "# Validate that a number is positive\n\n",
                validation: {
                    type: "output",
                    expected: "Must be positive"
                },
                hints: [
                    "if n <= 0: raise ValueError(\"Must be positive\")",
                    "Wrap the call in try/except ValueError as e",
                    "print(e) to show the error message"
                ]
            }
        }
    },
    {
        id: 11,
        title: "Classes & OOP",
        content: `
            <h1>Classes & Object-Oriented Programming</h1>
            <p>Classes let you create custom data types that bundle data (attributes) and behavior (methods) together.</p>

            <h2>Defining a Class</h2>
            <pre><code>class Dog:
    # Class attribute (shared by all instances)
    species = "Canis familiaris"

    # Constructor (initializer)
    def __init__(self, name, age):
        # Instance attributes (unique to each instance)
        self.name = name
        self.age = age

    # Instance method
    def bark(self):
        return f"{self.name} says Woof!"

# Create instances
buddy = Dog("Buddy", 3)
print(buddy.bark())  # "Buddy says Woof!"</code></pre>

            <h2>The self Parameter</h2>
            <p><code>self</code> refers to the instance calling the method. Python passes it automatically:</p>
            <pre><code># When you call:
buddy.bark()
# Python actually does:
Dog.bark(buddy)</code></pre>

            <h2>Inheritance</h2>
            <pre><code>class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        raise NotImplementedError("Subclass must implement")

class Dog(Animal):  # Dog inherits from Animal
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"</code></pre>

            <h2>Special Methods (Dunder Methods)</h2>
            <pre><code>class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        """Called by print() and str()"""
        return f"Point({self.x}, {self.y})"

    def __add__(self, other):
        """Called by + operator"""
        return Point(self.x + other.x, self.y + other.y)

p1 = Point(1, 2)
p2 = Point(3, 4)
print(p1)           # Point(1, 2)
print(p1 + p2)      # Point(4, 6)</code></pre>
        `,
        quiz: [
            {
                question: "What is the purpose of <code>__init__</code> in a class?",
                options: [
                    "To destroy the object",
                    "To initialize the object's attributes",
                    "To import modules",
                    "To print the object"
                ],
                correct: 1
            },
            {
                question: "What does <code>self</code> refer to in a class method?",
                options: [
                    "The class itself",
                    "The current instance of the class",
                    "The parent class",
                    "A global variable"
                ],
                correct: 1
            },
            {
                question: "What is inheritance in OOP?",
                options: [
                    "Copying code from one file to another",
                    "A class deriving attributes and methods from another class",
                    "Creating multiple instances",
                    "Importing modules"
                ],
                correct: 1
            },
            {
                question: "What does the <code>__str__</code> method do?",
                options: [
                    "Converts string to object",
                    "Defines how the object is printed",
                    "Checks if object is a string",
                    "Deletes the object"
                ],
                correct: 1
            }
        ],
        challenges: {
            easy: {
                title: "Rectangle Class",
                instructions: "Create a <code>Rectangle</code> class with <code>width</code> and <code>height</code> attributes. Add an <code>area()</code> method that returns width * height. Create a rectangle with width=5, height=3 and print its area.",
                starterCode: "# Define a Rectangle class with width, height, and area() method\n\n",
                validation: {
                    type: "output",
                    expected: "15"
                },
                hints: [
                    "class Rectangle: with __init__(self, width, height)",
                    "Store self.width and self.height",
                    "def area(self): return self.width * self.height"
                ]
            },
            medium: {
                title: "Counter Class",
                instructions: "Create a <code>Counter</code> class with a <code>count</code> starting at 0. Add <code>increment()</code> and <code>get_count()</code> methods. Increment 3 times and print the count.",
                starterCode: "# Create a Counter class\n\n",
                validation: {
                    type: "output",
                    expected: "3"
                },
                hints: [
                    "__init__ should set self.count = 0",
                    "increment: self.count += 1",
                    "get_count: return self.count"
                ]
            },
            hard: {
                title: "BankAccount Class",
                instructions: "Create <code>BankAccount</code> with <code>balance</code> starting at 0. Add <code>deposit(amount)</code> and <code>withdraw(amount)</code> methods. Withdraw should not allow negative balance (just don't change balance if insufficient). Deposit 100, withdraw 30, print balance.",
                starterCode: "# Create a BankAccount class\n\n",
                validation: {
                    type: "output",
                    expected: "70"
                },
                hints: [
                    "__init__ sets self.balance = 0",
                    "deposit: self.balance += amount",
                    "withdraw: only subtract if amount <= self.balance"
                ]
            }
        }
    },
    {
        id: 12,
        title: "Modules & Imports",
        content: `
            <h1>Modules & Imports</h1>
            <p>Modules let you organize code into reusable files. Python's standard library has hundreds of built-in modules.</p>

            <h2>Import Styles</h2>
            <pre><code># Import entire module
import math
print(math.sqrt(16))  # 4.0

# Import specific items
from math import sqrt, pi
print(sqrt(16))  # 4.0 (no prefix needed)

# Import with alias
import math as m
print(m.sqrt(16))</code></pre>

            <h2>Essential Standard Library Modules</h2>
            <pre><code># math - Mathematical functions
import math
math.sqrt(16)      # 4.0
math.ceil(4.2)     # 5
math.floor(4.8)    # 4
math.factorial(5)  # 120

# random - Random number generation
import random
random.random()           # Float between 0 and 1
random.randint(1, 10)     # Integer between 1 and 10
random.choice([1, 2, 3])  # Random element from list

# datetime - Date and time handling
from datetime import datetime
now = datetime.now()
print(now.strftime("%Y-%m-%d"))  # "2024-01-15"</code></pre>

            <h2>The collections Module</h2>
            <pre><code>from collections import Counter, defaultdict

# Counter - Count occurrences
words = ["apple", "banana", "apple", "cherry", "apple"]
count = Counter(words)
print(count)  # Counter({'apple': 3, 'banana': 1, 'cherry': 1})
count.most_common(2)  # [('apple', 3), ('banana', 1)]

# defaultdict - Dict with default values
dd = defaultdict(list)
dd["fruits"].append("apple")  # No KeyError!</code></pre>
        `,
        quiz: [
            {
                question: "What is the difference between <code>import math</code> and <code>from math import sqrt</code>?",
                options: [
                    "No difference",
                    "First imports entire module, second imports only sqrt",
                    "First is faster",
                    "Second imports entire module"
                ],
                correct: 1
            },
            {
                question: "How do you import a module with an alias?",
                options: [
                    "import math = m",
                    "import math as m",
                    "import m from math",
                    "alias math as m"
                ],
                correct: 1
            },
            {
                question: "What does <code>math.floor(4.7)</code> return?",
                options: [
                    "5",
                    "4",
                    "4.7",
                    "5.0"
                ],
                correct: 1
            },
            {
                question: "What does <code>Counter</code> from collections do?",
                options: [
                    "Counts lines of code",
                    "Creates a loop counter",
                    "Counts occurrences of elements",
                    "Measures time"
                ],
                correct: 2
            }
        ],
        challenges: {
            easy: {
                title: "Square Root",
                instructions: "Import the <code>math</code> module and use it to calculate the square root of 144, then round it to the nearest integer using <code>math.floor()</code>. Print the result.",
                starterCode: "# Import math and calculate floor of sqrt(144)\n\n",
                validation: {
                    type: "output",
                    expected: "12"
                },
                hints: [
                    "import math",
                    "math.sqrt(144) gives 12.0",
                    "math.floor() rounds down to integer"
                ]
            },
            medium: {
                title: "Factorial",
                instructions: "Calculate 5! (5 factorial) using <code>math.factorial()</code> and print the result.",
                starterCode: "# Calculate 5 factorial\n\n",
                validation: {
                    type: "output",
                    expected: "120"
                },
                hints: [
                    "import math",
                    "math.factorial(5) calculates 5!",
                    "5! = 5 * 4 * 3 * 2 * 1 = 120"
                ]
            },
            hard: {
                title: "Count Words",
                instructions: "Use <code>Counter</code> from collections to count word occurrences in <code>['cat', 'dog', 'cat', 'bird', 'cat', 'dog']</code>. Print the most common word and its count as a tuple.",
                starterCode: "# Count words and find most common\n\n",
                validation: {
                    type: "output",
                    expected: "('cat', 3)"
                },
                hints: [
                    "from collections import Counter",
                    "counter = Counter(words_list)",
                    "counter.most_common(1)[0] gives the top item as tuple"
                ]
            }
        }
    },
    {
        id: 13,
        title: "Tuples & Sets",
        content: `
            <h1>Tuples & Sets</h1>
            <p>Beyond lists and dicts, Python has two more essential collection types: <strong>immutable tuples</strong> and <strong>unique-element sets</strong>.</p>

            <h2>Tuples: Immutable Sequences</h2>
            <pre><code># Creating tuples
point = (3, 4)
single = (42,)      # Note the comma! (42) is just an int
coordinates = 10, 20, 30  # Parentheses optional

# Tuple unpacking
x, y = point        # x=3, y=4
first, *rest = [1, 2, 3, 4, 5]  # first=1, rest=[2,3,4,5]</code></pre>

            <h2>Why Tuples?</h2>
            <pre><code># 1. Immutability = Safety
point = (3, 4)
point[0] = 5  # TypeError! Can't modify

# 2. Hashable = Can be dict keys or set members
locations = {(0, 0): "origin", (1, 1): "diagonal"}</code></pre>

            <h2>Sets: Unique Elements</h2>
            <pre><code># Creating sets
numbers = {1, 2, 3, 4, 5}
from_list = set([1, 2, 2, 3, 3, 3])  # {1, 2, 3}
empty_set = set()  # NOT {} (that's an empty dict!)

# Sets automatically remove duplicates
letters = set("mississippi")  # {'m', 'i', 's', 'p'}</code></pre>

            <h2>Set Operations</h2>
            <pre><code>a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

a | b   # Union: {1, 2, 3, 4, 5, 6}
a & b   # Intersection: {3, 4}
a - b   # Difference: {1, 2}
a ^ b   # Symmetric difference: {1, 2, 5, 6}</code></pre>
        `,
        quiz: [
            {
                question: "Are tuples mutable or immutable?",
                options: [
                    "Mutable",
                    "Immutable",
                    "Sometimes mutable",
                    "Neither"
                ],
                correct: 1
            },
            {
                question: "What is special about sets?",
                options: [
                    "They are ordered",
                    "They contain only unique elements",
                    "They can only hold numbers",
                    "They are immutable"
                ],
                correct: 1
            },
            {
                question: "What does <code>a & b</code> return for two sets?",
                options: [
                    "Union of a and b",
                    "Intersection of a and b",
                    "Difference of a and b",
                    "Error"
                ],
                correct: 1
            },
            {
                question: "How do you create an empty set?",
                options: [
                    "{}",
                    "set()",
                    "[]",
                    "()"
                ],
                correct: 1
            }
        ],
        challenges: {
            easy: {
                title: "Set Intersection",
                instructions: "Create two sets: <code>a = {1, 2, 3, 4, 5}</code> and <code>b = {4, 5, 6, 7, 8}</code>. Find and print their intersection (elements in both sets).",
                starterCode: "# Create two sets and find their intersection\n\n",
                validation: {
                    type: "output",
                    expected: "{4, 5}"
                },
                hints: [
                    "a = {1, 2, 3, 4, 5}",
                    "b = {4, 5, 6, 7, 8}",
                    "Use a & b or a.intersection(b)"
                ]
            },
            medium: {
                title: "Remove Duplicates",
                instructions: "Remove duplicates from <code>[1, 2, 2, 3, 3, 3, 4, 4, 4, 4]</code> using a set, then convert back to a sorted list. Print the result.",
                starterCode: "# Remove duplicates and sort\nnums = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]\n\n",
                validation: {
                    type: "output",
                    expected: "[1, 2, 3, 4]"
                },
                hints: [
                    "Convert to set: set(nums)",
                    "Convert back to list and sort: sorted(set(nums))",
                    "Print the result"
                ]
            },
            hard: {
                title: "Tuple Unpacking",
                instructions: "Given <code>data = (\"Alice\", 30, \"NYC\")</code>, unpack into <code>name</code>, <code>age</code>, <code>city</code> variables. Print them in format: <code>Alice is 30 from NYC</code>",
                starterCode: "# Unpack tuple into variables\ndata = (\"Alice\", 30, \"NYC\")\n\n",
                validation: {
                    type: "output",
                    expected: "Alice is 30 from NYC"
                },
                hints: [
                    "name, age, city = data",
                    "Use f-string: f\"{name} is {age} from {city}\"",
                    "Print the formatted string"
                ]
            }
        }
    },
    {
        id: 14,
        title: "File I/O",
        content: `
            <h1>File I/O</h1>
            <p>Reading and writing files is fundamental to most programs. Python makes it straightforward with built-in functions.</p>

            <h2>The with Statement</h2>
            <pre><code># ALWAYS use 'with' - it automatically closes the file
with open("data.txt", "r") as file:
    content = file.read()
# File is automatically closed here</code></pre>

            <h2>Reading Files</h2>
            <pre><code># Read entire file as string
with open("data.txt", "r") as f:
    content = f.read()

# Read line by line (memory efficient)
with open("data.txt", "r") as f:
    for line in f:
        print(line.strip())

# Read all lines into list
with open("data.txt", "r") as f:
    lines = f.readlines()</code></pre>

            <h2>Writing Files</h2>
            <pre><code># Write (overwrites existing content!)
with open("output.txt", "w") as f:
    f.write("Hello, World!\\n")

# Append to existing file
with open("log.txt", "a") as f:
    f.write("New log entry\\n")</code></pre>

            <h2>String Simulation</h2>
            <p>Since we can't write actual files in the browser, we can practice with multi-line strings:</p>
            <pre><code># Simulate file content with multi-line string
data = """Line 1
Line 2
Line 3"""

lines = data.split("\\n")  # Split into lines
print(len(lines))  # 3</code></pre>
        `,
        quiz: [
            {
                question: "What is the recommended way to open files in Python?",
                options: [
                    "file = open('data.txt')",
                    "with open('data.txt') as file:",
                    "file.open('data.txt')",
                    "open file 'data.txt'"
                ],
                correct: 1
            },
            {
                question: "What does the mode <code>'a'</code> do when opening a file?",
                options: [
                    "Opens file for reading only",
                    "Opens file and overwrites existing content",
                    "Opens file and appends to existing content",
                    "Opens file in binary mode"
                ],
                correct: 2
            },
            {
                question: "Which method reads a file line by line into a list?",
                options: [
                    "file.read()",
                    "file.readline()",
                    "file.readlines()",
                    "file.readall()"
                ],
                correct: 2
            }
        ],
        challenges: {
            easy: {
                title: "Count Lines",
                instructions: "This exercise simulates file operations. Create a string <code>data = \"Hello\\nWorld\\nPython\"</code>. Split it by newlines and print the number of lines.",
                starterCode: "# Simulate reading a file: split a multi-line string and count lines\n\n",
                validation: {
                    type: "output",
                    expected: "3"
                },
                hints: [
                    "data = \"Hello\\nWorld\\nPython\"",
                    "Use data.split(\"\\n\") to get a list of lines",
                    "Use len() to count the lines"
                ]
            },
            medium: {
                title: "Join Lines",
                instructions: "Given a list <code>lines = [\"Line 1\", \"Line 2\", \"Line 3\"]</code>, join them with newlines to create a single string. Print the result.",
                starterCode: "# Join lines with newlines\nlines = [\"Line 1\", \"Line 2\", \"Line 3\"]\n\n",
                validation: {
                    type: "output",
                    expected: "Line 1\nLine 2\nLine 3"
                },
                hints: [
                    "Use \"\\n\".join(lines)",
                    "This joins all strings with newline between them",
                    "Print the result"
                ]
            },
            hard: {
                title: "CSV Parsing",
                instructions: "Parse this CSV-like string: <code>\"name,age\\nAlice,30\\nBob,25\"</code>. Split into lines, then split each line by comma. Print just the names (Alice, Bob) on separate lines.",
                starterCode: "# Parse CSV-like data\ncsv_data = \"name,age\\nAlice,30\\nBob,25\"\n\n",
                validation: {
                    type: "output",
                    expected: "Alice\nBob"
                },
                hints: [
                    "Split by newline first: lines = csv_data.split(\"\\n\")",
                    "Skip header (lines[1:])",
                    "For each line, split by comma and print first element"
                ]
            }
        }
    },
    {
        id: 15,
        title: "Decorators",
        content: `
            <h1>Decorators</h1>
            <p>Decorators are functions that modify other functions. They're Python's way of implementing the decorator pattern cleanly.</p>

            <h2>Functions as First-Class Objects</h2>
            <pre><code># Functions can be assigned to variables
def greet(name):
    return f"Hello, {name}!"

say_hello = greet
print(say_hello("Alice"))  # "Hello, Alice!"

# Functions can return other functions
def make_multiplier(n):
    def multiply(x):
        return x * n
    return multiply

double = make_multiplier(2)
print(double(5))  # 10</code></pre>

            <h2>Basic Decorator</h2>
            <pre><code>def my_decorator(func):
    def wrapper():
        print("Before")
        func()
        print("After")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
# Output:
# Before
# Hello!
# After</code></pre>

            <h2>Decorators with Arguments</h2>
            <pre><code>def my_decorator(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        result = func(*args, **kwargs)
        return result
    return wrapper

@my_decorator
def add(a, b):
    return a + b

print(add(3, 5))  # Prints "Calling add" then 8</code></pre>
        `,
        quiz: [
            {
                question: "What is a decorator in Python?",
                options: [
                    "A way to add comments to functions",
                    "A function that modifies another function",
                    "A type of loop construct",
                    "A method for creating classes"
                ],
                correct: 1
            },
            {
                question: "What does the <code>@</code> symbol do before a function definition?",
                options: [
                    "Marks the function as private",
                    "Applies a decorator to the function",
                    "Makes the function run faster",
                    "Creates a copy of the function"
                ],
                correct: 1
            },
            {
                question: "Why do decorators typically define a <code>wrapper</code> function inside?",
                options: [
                    "To hide the original function",
                    "To add behavior before/after the original function runs",
                    "To make the code more readable",
                    "Python requires it for all functions"
                ],
                correct: 1
            }
        ],
        challenges: {
            easy: {
                title: "Uppercase Decorator",
                instructions: "Create a decorator <code>uppercase</code> that makes a function's string return value uppercase. Apply it to a function <code>greet()</code> that returns <code>\"hello\"</code>. Print the result of calling greet().",
                starterCode: "# Create a decorator that uppercases the return value\n\n",
                validation: {
                    type: "output",
                    expected: "HELLO"
                },
                hints: [
                    "def uppercase(func): with wrapper inside",
                    "wrapper calls func() and returns result.upper()",
                    "@uppercase above def greet(): return \"hello\""
                ]
            },
            medium: {
                title: "Double Result",
                instructions: "Create a decorator <code>double_result</code> that doubles a function's numeric return value. Apply to <code>get_five()</code> that returns 5. Print the result.",
                starterCode: "# Create a decorator that doubles the return value\n\n",
                validation: {
                    type: "output",
                    expected: "10"
                },
                hints: [
                    "def double_result(func):",
                    "wrapper returns func() * 2",
                    "@double_result def get_five(): return 5"
                ]
            },
            hard: {
                title: "Call Counter",
                instructions: "Create a decorator <code>count_calls</code> that tracks how many times a function is called using a wrapper attribute. Call <code>my_func()</code> 3 times and print <code>my_func.calls</code>.",
                starterCode: "# Create a decorator that counts calls\n\n",
                validation: {
                    type: "output",
                    expected: "3"
                },
                hints: [
                    "wrapper.calls = 0 before returning wrapper",
                    "Inside wrapper: wrapper.calls += 1",
                    "Call my_func() 3 times, then print(my_func.calls)"
                ]
            }
        }
    },
    {
        id: 16,
        title: "Generators",
        content: `
            <h1>Generators</h1>
            <p>Generators are functions that can pause and resume, yielding values one at a time. They're memory-efficient for large sequences.</p>

            <h2>Generator Functions</h2>
            <pre><code># Generator function: yields one at a time
def get_squares(n):
    for i in range(n):
        yield i ** 2  # Pauses here, resumes on next()

# Usage
gen = get_squares(5)
print(next(gen))  # 0
print(next(gen))  # 1
print(next(gen))  # 4

# Or iterate
for square in get_squares(5):
    print(square)  # 0, 1, 4, 9, 16</code></pre>

            <h2>Why Generators?</h2>
            <pre><code># Memory efficiency
# List: All 1 million in memory
big_list = [x for x in range(1_000_000)]  # ~8MB

# Generator: Only one at a time in memory
big_gen = (x for x in range(1_000_000))   # ~100 bytes!</code></pre>

            <h2>Generator Expressions</h2>
            <pre><code># Generator expression (parentheses instead of brackets)
squares_gen = (x**2 for x in range(10))

# Use directly in functions
sum(x**2 for x in range(10))  # 285</code></pre>
        `,
        quiz: [
            {
                question: "What keyword makes a function a generator?",
                options: [
                    "return",
                    "yield",
                    "generate",
                    "next"
                ],
                correct: 1
            },
            {
                question: "Why are generators more memory-efficient than lists?",
                options: [
                    "They use compression",
                    "They only hold one value at a time in memory",
                    "They delete values after use",
                    "They store values as integers only"
                ],
                correct: 1
            },
            {
                question: "What is the difference between <code>[x for x in range(10)]</code> and <code>(x for x in range(10))</code>?",
                options: [
                    "No difference, both create lists",
                    "First is a list, second is a tuple",
                    "First is a list, second is a generator",
                    "First is faster, second is slower"
                ],
                correct: 2
            }
        ],
        challenges: {
            easy: {
                title: "Countdown Generator",
                instructions: "Create a generator function <code>countdown(n)</code> that yields numbers from n down to 1. Use it to print a countdown from 5 to 1, each number on a new line.",
                starterCode: "# Create a countdown generator\n\n",
                validation: {
                    type: "output",
                    expected: "5\n4\n3\n2\n1"
                },
                hints: [
                    "def countdown(n): with a while or for loop",
                    "yield n, then decrement or use range(n, 0, -1)",
                    "for num in countdown(5): print(num)"
                ]
            },
            medium: {
                title: "Even Generator",
                instructions: "Create a generator <code>evens(n)</code> that yields the first n even numbers starting from 2. Print the first 5 even numbers.",
                starterCode: "# Generate even numbers\n\n",
                validation: {
                    type: "output",
                    expected: "2\n4\n6\n8\n10"
                },
                hints: [
                    "def evens(n): with count tracking",
                    "yield 2, 4, 6... (increment by 2)",
                    "for num in evens(5): print(num)"
                ]
            },
            hard: {
                title: "Fibonacci Generator",
                instructions: "Create a generator <code>fibonacci(n)</code> that yields the first n Fibonacci numbers (0, 1, 1, 2, 3, 5...). Print the first 7.",
                starterCode: "# Generate Fibonacci numbers\n\n",
                validation: {
                    type: "output",
                    expected: "0\n1\n1\n2\n3\n5\n8"
                },
                hints: [
                    "Start with a, b = 0, 1",
                    "yield a, then a, b = b, a + b",
                    "Loop n times"
                ]
            }
        }
    },
    {
        id: 17,
        title: "Regular Expressions",
        content: `
            <h1>Regular Expressions</h1>
            <p>Regular expressions (regex) are powerful patterns for matching, searching, and manipulating text.</p>

            <h2>Basic Patterns</h2>
            <pre><code>import re

# Literal characters match themselves
re.search("hello", "hello world")  # Match!

# Special characters
.     # Any character except newline
^     # Start of string
$     # End of string
*     # 0 or more of previous
+     # 1 or more of previous
?     # 0 or 1 of previous</code></pre>

            <h2>Character Classes</h2>
            <pre><code>[abc]     # a, b, or c
[0-9]     # Any digit
\\d       # Digit [0-9]
\\w       # Word character [a-zA-Z0-9_]
\\s       # Whitespace</code></pre>

            <h2>Common re Functions</h2>
            <pre><code>import re

text = "The cat sat on the mat"

# search: Find first match
match = re.search(r"cat", text)
if match:
    print(match.group())  # "cat"

# findall: Find all matches
re.findall(r"\\w+", text)  # ['The', 'cat', 'sat', ...]

# sub: Replace matches
re.sub(r"cat", "dog", text)  # "The dog sat on the mat"

# split: Split on pattern
re.split(r"\\s+", text)  # ['The', 'cat', 'sat', ...]</code></pre>
        `,
        quiz: [
            {
                question: "What does <code>\\\\d+</code> match in a regex pattern?",
                options: [
                    "Exactly one digit",
                    "One or more digits",
                    "Zero or more digits",
                    "Any character"
                ],
                correct: 1
            },
            {
                question: "Which function finds ALL matches of a pattern in a string?",
                options: [
                    "re.search()",
                    "re.match()",
                    "re.findall()",
                    "re.find()"
                ],
                correct: 2
            },
            {
                question: "What does <code>re.sub(r'cat', 'dog', text)</code> do?",
                options: [
                    "Finds 'cat' in the text",
                    "Replaces 'cat' with 'dog' in the text",
                    "Splits text at 'cat'",
                    "Checks if 'cat' equals 'dog'"
                ],
                correct: 1
            }
        ],
        challenges: {
            easy: {
                title: "Find Numbers",
                instructions: "Use <code>re.findall()</code> to extract all numbers (sequences of digits) from the string <code>\"Order 123 has 45 items at $67 each\"</code>. Print the resulting list.",
                starterCode: "import re\n\n# Extract all numbers from the string\ntext = \"Order 123 has 45 items at $67 each\"\n\n",
                validation: {
                    type: "output",
                    expected: "['123', '45', '67']"
                },
                hints: [
                    "Use pattern \\\\d+ to match one or more digits",
                    "re.findall(r\"\\\\d+\", text)",
                    "Print the result directly"
                ]
            },
            medium: {
                title: "Replace Digits",
                instructions: "Use <code>re.sub()</code> to replace all digits in <code>\"Phone: 555-1234\"</code> with <code>X</code>. Print the result.",
                starterCode: "import re\n\n# Replace all digits with X\ntext = \"Phone: 555-1234\"\n\n",
                validation: {
                    type: "output",
                    expected: "Phone: XXX-XXXX"
                },
                hints: [
                    "Pattern \\\\d matches single digit",
                    "re.sub(r\"\\\\d\", \"X\", text)",
                    "Print the result"
                ]
            },
            hard: {
                title: "Extract Words",
                instructions: "Use regex to find all words that start with a capital letter in <code>\"Alice and Bob went to Paris\"</code>. Print the list.",
                starterCode: "import re\n\n# Find words starting with capital letter\ntext = \"Alice and Bob went to Paris\"\n\n",
                validation: {
                    type: "output",
                    expected: "['Alice', 'Bob', 'Paris']"
                },
                hints: [
                    "Pattern: [A-Z][a-z]* (capital followed by lowercase)",
                    "Or use \\\\b[A-Z]\\\\w* for word boundary",
                    "re.findall(r\"[A-Z][a-z]+\", text)"
                ]
            }
        }
    },
    {
        id: 18,
        title: "Working with JSON",
        content: `
            <h1>Working with JSON</h1>
            <p>JSON (JavaScript Object Notation) is the universal format for data exchange. Python's <code>json</code> module handles it seamlessly.</p>

            <h2>JSON to Python</h2>
            <pre><code>import json

json_string = '{"name": "Alice", "age": 30}'

# Parse JSON string to Python dict
data = json.loads(json_string)
print(data["name"])   # "Alice"</code></pre>

            <h2>Python to JSON</h2>
            <pre><code>import json

data = {"name": "Bob", "age": 25, "active": True}

# Convert Python to JSON string
json_string = json.dumps(data)

# Pretty printing
pretty_json = json.dumps(data, indent=2)</code></pre>

            <h2>Type Mapping</h2>
            <pre><code># JSON → Python
# object → dict
# array → list
# string → str
# number → int/float
# true → True
# false → False
# null → None</code></pre>
        `,
        quiz: [
            {
                question: "Which function converts a JSON string to a Python dictionary?",
                options: [
                    "json.dumps()",
                    "json.loads()",
                    "json.parse()",
                    "json.read()"
                ],
                correct: 1
            },
            {
                question: "What Python type does JSON <code>null</code> become?",
                options: [
                    "0",
                    "False",
                    "None",
                    "\"null\""
                ],
                correct: 2
            },
            {
                question: "What does <code>json.dumps(data, indent=2)</code> do?",
                options: [
                    "Parses JSON with 2 spaces",
                    "Converts Python to JSON with pretty-printing",
                    "Reads JSON from a file",
                    "Creates a 2-character JSON string"
                ],
                correct: 1
            }
        ],
        challenges: {
            easy: {
                title: "Parse JSON",
                instructions: "Parse this JSON string: <code>'{\"name\": \"Alice\", \"scores\": [85, 90, 78]}'</code>. Calculate and print the average of the scores.",
                starterCode: "import json\n\n# Parse JSON and calculate average of scores\njson_string = '{\"name\": \"Alice\", \"scores\": [85, 90, 78]}'\n\n",
                validation: {
                    type: "output",
                    expected: "84.33333333333333"
                },
                hints: [
                    "data = json.loads(json_string)",
                    "Access scores with data[\"scores\"]",
                    "Average = sum(scores) / len(scores)"
                ]
            },
            medium: {
                title: "Create JSON",
                instructions: "Create a dictionary <code>person = {\"name\": \"Bob\", \"age\": 25}</code> and convert it to a JSON string. Print the JSON string.",
                starterCode: "import json\n\n# Create dict and convert to JSON\n\n",
                validation: {
                    type: "output",
                    expected: "{\"name\": \"Bob\", \"age\": 25}"
                },
                hints: [
                    "person = {\"name\": \"Bob\", \"age\": 25}",
                    "json_str = json.dumps(person)",
                    "Print the result"
                ]
            },
            hard: {
                title: "Nested JSON",
                instructions: "Parse <code>'{\"user\": {\"name\": \"Alice\", \"settings\": {\"theme\": \"dark\"}}}'</code> and print just the theme value.",
                starterCode: "import json\n\n# Parse nested JSON and extract theme\njson_string = '{\"user\": {\"name\": \"Alice\", \"settings\": {\"theme\": \"dark\"}}}'\n\n",
                validation: {
                    type: "output",
                    expected: "dark"
                },
                hints: [
                    "data = json.loads(json_string)",
                    "Navigate: data[\"user\"][\"settings\"][\"theme\"]",
                    "Print the theme value"
                ]
            }
        }
    }
];
