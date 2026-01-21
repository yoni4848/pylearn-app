/**
 * Reference Data - Quick Reference Panel Content
 * Maps lesson IDs to relevant syntax, functions, examples, and common errors
 */

const REFERENCE_DATA = {
    // Lesson 1: Hello, Python!
    1: {
        title: "Print & Strings",
        syntax: [
            { code: 'print("text")', desc: 'Print text to console' },
            { code: '"string"  or  \'string\'', desc: 'String literals' },
            { code: '"""multi-line"""', desc: 'Multi-line strings' },
            { code: '\\n  \\t  \\\\"', desc: 'Newline, tab, quote' }
        ],
        functions: [
            { name: 'print(x)', desc: 'Output to console' },
            { name: 'print(a, b, c)', desc: 'Print multiple values' },
            { name: 'print(end="")', desc: 'Custom line ending' }
        ],
        examples: [
            { title: 'Basic print', code: 'print("Hello, World!")' },
            { title: 'Multiple values', code: 'print("Sum:", 2 + 3)' },
            { title: 'Escape characters', code: 'print("Line 1\\nLine 2")' }
        ],
        errors: [
            { error: 'SyntaxError', cause: 'Missing quotes around string' },
            { error: 'SyntaxError', cause: 'Mismatched quote types' }
        ]
    },

    // Lesson 2: Variables & Types
    2: {
        title: "Variables & Types",
        syntax: [
            { code: 'name = value', desc: 'Variable assignment' },
            { code: 'x, y = 1, 2', desc: 'Multiple assignment' },
            { code: 'x = y = 0', desc: 'Chain assignment' }
        ],
        functions: [
            { name: 'type(x)', desc: 'Get variable type' },
            { name: 'int(x)', desc: 'Convert to integer' },
            { name: 'float(x)', desc: 'Convert to float' },
            { name: 'str(x)', desc: 'Convert to string' },
            { name: 'bool(x)', desc: 'Convert to boolean' }
        ],
        examples: [
            { title: 'Create variables', code: 'name = "Alice"\nage = 25\npi = 3.14' },
            { title: 'Type checking', code: 'print(type(age))  # <class \'int\'>' },
            { title: 'Type conversion', code: 'num = int("42")\ntext = str(100)' }
        ],
        errors: [
            { error: 'NameError', cause: 'Using undefined variable' },
            { error: 'TypeError', cause: 'Mixing incompatible types' },
            { error: 'ValueError', cause: 'Invalid conversion (int("abc"))' }
        ]
    },

    // Lesson 3: Operators
    3: {
        title: "Operators",
        syntax: [
            { code: '+ - * /', desc: 'Arithmetic operators' },
            { code: '//', desc: 'Floor division' },
            { code: '%', desc: 'Modulo (remainder)' },
            { code: '**', desc: 'Exponentiation' },
            { code: '== != < > <= >=', desc: 'Comparison operators' },
            { code: 'and or not', desc: 'Logical operators' }
        ],
        functions: [
            { name: 'abs(x)', desc: 'Absolute value' },
            { name: 'round(x, n)', desc: 'Round to n decimals' },
            { name: 'pow(x, y)', desc: 'x to power y' },
            { name: 'divmod(a, b)', desc: 'Return (quotient, remainder)' }
        ],
        examples: [
            { title: 'Floor vs regular', code: '7 / 2   # 3.5\n7 // 2  # 3' },
            { title: 'Modulo', code: '17 % 5  # 2 (remainder)' },
            { title: 'Extract digit', code: '123 % 10  # 3 (last digit)' }
        ],
        errors: [
            { error: 'ZeroDivisionError', cause: 'Division by zero' },
            { error: 'TypeError', cause: 'Operator on wrong types' }
        ]
    },

    // Lesson 4: Control Flow
    4: {
        title: "Control Flow",
        syntax: [
            { code: 'if condition:', desc: 'If statement' },
            { code: 'elif condition:', desc: 'Else if' },
            { code: 'else:', desc: 'Else clause' },
            { code: 'x if cond else y', desc: 'Ternary expression' }
        ],
        functions: [
            { name: 'isinstance(x, type)', desc: 'Check type' },
            { name: 'all(iterable)', desc: 'True if all true' },
            { name: 'any(iterable)', desc: 'True if any true' }
        ],
        examples: [
            { title: 'Basic if-else', code: 'if x > 0:\n    print("positive")\nelse:\n    print("not positive")' },
            { title: 'Multiple conditions', code: 'if score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"' },
            { title: 'Ternary', code: 'result = "even" if x % 2 == 0 else "odd"' }
        ],
        errors: [
            { error: 'IndentationError', cause: 'Inconsistent indentation' },
            { error: 'SyntaxError', cause: 'Missing colon after condition' }
        ]
    },

    // Lesson 5: Loops
    5: {
        title: "Loops",
        syntax: [
            { code: 'for x in iterable:', desc: 'For loop' },
            { code: 'while condition:', desc: 'While loop' },
            { code: 'break', desc: 'Exit loop' },
            { code: 'continue', desc: 'Skip iteration' }
        ],
        functions: [
            { name: 'range(n)', desc: '0 to n-1' },
            { name: 'range(a, b)', desc: 'a to b-1' },
            { name: 'range(a, b, step)', desc: 'With step' },
            { name: 'enumerate(seq)', desc: 'Index + value pairs' },
            { name: 'zip(a, b)', desc: 'Pair elements' }
        ],
        examples: [
            { title: 'Count 1 to 5', code: 'for i in range(1, 6):\n    print(i)' },
            { title: 'Sum numbers', code: 'total = 0\nfor n in range(1, 11):\n    total += n' },
            { title: 'While loop', code: 'while x > 0:\n    x -= 1' }
        ],
        errors: [
            { error: 'Infinite loop', cause: 'Condition never becomes False' },
            { error: 'IndentationError', cause: 'Loop body not indented' }
        ]
    },

    // Lesson 6: Lists
    6: {
        title: "Lists",
        syntax: [
            { code: '[1, 2, 3]', desc: 'List literal' },
            { code: 'list[i]', desc: 'Access by index' },
            { code: 'list[a:b]', desc: 'Slice' },
            { code: '[x*2 for x in list]', desc: 'List comprehension' }
        ],
        functions: [
            { name: 'len(list)', desc: 'Get length' },
            { name: 'list.append(x)', desc: 'Add to end' },
            { name: 'list.pop()', desc: 'Remove last' },
            { name: 'list.insert(i, x)', desc: 'Insert at index' },
            { name: 'list.remove(x)', desc: 'Remove first x' },
            { name: 'list.sort()', desc: 'Sort in place' },
            { name: 'sorted(list)', desc: 'Return sorted copy' }
        ],
        examples: [
            { title: 'Create & access', code: 'nums = [1, 2, 3]\nfirst = nums[0]  # 1' },
            { title: 'Comprehension', code: 'squares = [x**2 for x in range(5)]' },
            { title: 'Filter', code: 'evens = [x for x in nums if x % 2 == 0]' }
        ],
        errors: [
            { error: 'IndexError', cause: 'Index out of range' },
            { error: 'TypeError', cause: 'List indices must be integers' }
        ]
    },

    // Lesson 7: Dictionaries
    7: {
        title: "Dictionaries",
        syntax: [
            { code: '{"key": value}', desc: 'Dict literal' },
            { code: 'dict[key]', desc: 'Access value' },
            { code: 'dict.get(key, default)', desc: 'Safe access' },
            { code: '{k: v for ...}', desc: 'Dict comprehension' }
        ],
        functions: [
            { name: 'dict.keys()', desc: 'Get all keys' },
            { name: 'dict.values()', desc: 'Get all values' },
            { name: 'dict.items()', desc: 'Get key-value pairs' },
            { name: 'dict.pop(key)', desc: 'Remove and return' },
            { name: 'dict.update(other)', desc: 'Merge dictionaries' },
            { name: 'key in dict', desc: 'Check key exists' }
        ],
        examples: [
            { title: 'Create dict', code: 'person = {"name": "Alice", "age": 25}' },
            { title: 'Access/modify', code: 'name = person["name"]\nperson["age"] = 26' },
            { title: 'Iterate', code: 'for key, val in person.items():\n    print(key, val)' }
        ],
        errors: [
            { error: 'KeyError', cause: 'Key not found (use .get())' },
            { error: 'TypeError', cause: 'Unhashable key (like list)' }
        ]
    },

    // Lesson 8: Functions
    8: {
        title: "Functions",
        syntax: [
            { code: 'def func(args):', desc: 'Function definition' },
            { code: 'return value', desc: 'Return statement' },
            { code: 'def f(x=10):', desc: 'Default parameter' },
            { code: '*args, **kwargs', desc: 'Variable arguments' },
            { code: 'lambda x: x*2', desc: 'Anonymous function' }
        ],
        functions: [
            { name: 'map(func, iter)', desc: 'Apply to all' },
            { name: 'filter(func, iter)', desc: 'Filter by function' },
            { name: 'reduce(func, iter)', desc: 'Reduce to single value' }
        ],
        examples: [
            { title: 'Basic function', code: 'def greet(name):\n    return f"Hello, {name}"' },
            { title: 'Default args', code: 'def power(x, n=2):\n    return x ** n' },
            { title: 'Lambda', code: 'double = lambda x: x * 2' }
        ],
        errors: [
            { error: 'TypeError', cause: 'Wrong number of arguments' },
            { error: 'NameError', cause: 'Variable not in scope' }
        ]
    },

    // Lesson 9: Strings
    9: {
        title: "Strings",
        syntax: [
            { code: 'f"Hello {name}"', desc: 'f-string formatting' },
            { code: '"{}".format(x)', desc: 'format() method' },
            { code: 'str[a:b]', desc: 'String slicing' }
        ],
        functions: [
            { name: 'str.upper()', desc: 'Uppercase' },
            { name: 'str.lower()', desc: 'Lowercase' },
            { name: 'str.strip()', desc: 'Remove whitespace' },
            { name: 'str.split(sep)', desc: 'Split into list' },
            { name: 'str.join(list)', desc: 'Join list items' },
            { name: 'str.replace(a, b)', desc: 'Replace substring' },
            { name: 'str.find(sub)', desc: 'Find index (-1 if not found)' },
            { name: 'str.count(sub)', desc: 'Count occurrences' }
        ],
        examples: [
            { title: 'f-string', code: 'name = "Alice"\nprint(f"Hi, {name}!")' },
            { title: 'Split/join', code: 'words = "a b c".split()\n"-".join(words)  # "a-b-c"' },
            { title: 'Check content', code: '"hello".startswith("he")  # True' }
        ],
        errors: [
            { error: 'AttributeError', cause: 'Method on non-string' },
            { error: 'IndexError', cause: 'String index out of range' }
        ]
    },

    // Lesson 10: Error Handling
    10: {
        title: "Error Handling",
        syntax: [
            { code: 'try:\n    ...\nexcept:', desc: 'Basic try-except' },
            { code: 'except ErrorType:', desc: 'Catch specific error' },
            { code: 'except E as e:', desc: 'Capture error object' },
            { code: 'finally:', desc: 'Always executes' },
            { code: 'raise Error(msg)', desc: 'Raise exception' }
        ],
        functions: [
            { name: 'raise ValueError()', desc: 'Raise value error' },
            { name: 'raise TypeError()', desc: 'Raise type error' },
            { name: 'assert condition', desc: 'Assert truth' }
        ],
        examples: [
            { title: 'Safe division', code: 'try:\n    result = x / y\nexcept ZeroDivisionError:\n    result = 0' },
            { title: 'Multiple except', code: 'try:\n    num = int(s)\nexcept ValueError:\n    num = 0' },
            { title: 'Finally', code: 'try:\n    f = open("file")\nfinally:\n    f.close()' }
        ],
        errors: [
            { error: 'Exception', cause: 'Base class for errors' },
            { error: 'ValueError', cause: 'Invalid value' },
            { error: 'TypeError', cause: 'Invalid type' }
        ]
    },

    // Lesson 11: Classes & OOP
    11: {
        title: "Classes & OOP",
        syntax: [
            { code: 'class Name:', desc: 'Class definition' },
            { code: 'def __init__(self):', desc: 'Constructor' },
            { code: 'self.attr = val', desc: 'Instance attribute' },
            { code: 'class B(A):', desc: 'Inheritance' }
        ],
        functions: [
            { name: '__init__(self)', desc: 'Constructor' },
            { name: '__str__(self)', desc: 'String representation' },
            { name: '__repr__(self)', desc: 'Debug representation' },
            { name: '__len__(self)', desc: 'len() support' },
            { name: 'super().__init__()', desc: 'Call parent constructor' }
        ],
        examples: [
            { title: 'Basic class', code: 'class Dog:\n    def __init__(self, name):\n        self.name = name' },
            { title: 'Method', code: '    def bark(self):\n        return f"{self.name} says woof!"' },
            { title: 'Create instance', code: 'my_dog = Dog("Buddy")\nmy_dog.bark()' }
        ],
        errors: [
            { error: 'AttributeError', cause: 'Attribute not found' },
            { error: 'TypeError', cause: 'Forgot self parameter' }
        ]
    },

    // Lesson 12: Modules & Imports
    12: {
        title: "Modules & Imports",
        syntax: [
            { code: 'import module', desc: 'Import module' },
            { code: 'from mod import x', desc: 'Import specific' },
            { code: 'import mod as m', desc: 'Import with alias' },
            { code: 'from mod import *', desc: 'Import all (avoid)' }
        ],
        functions: [
            { name: 'math.sqrt(x)', desc: 'Square root' },
            { name: 'math.floor(x)', desc: 'Round down' },
            { name: 'math.ceil(x)', desc: 'Round up' },
            { name: 'random.randint(a,b)', desc: 'Random integer' },
            { name: 'random.choice(seq)', desc: 'Random element' }
        ],
        examples: [
            { title: 'Import math', code: 'import math\nmath.sqrt(16)  # 4.0' },
            { title: 'From import', code: 'from math import pi, sqrt\nprint(pi)  # 3.14159...' },
            { title: 'Random', code: 'import random\nrandom.randint(1, 10)' }
        ],
        errors: [
            { error: 'ModuleNotFoundError', cause: 'Module not installed' },
            { error: 'ImportError', cause: 'Name not in module' }
        ]
    },

    // Lesson 13: Tuples & Sets
    13: {
        title: "Tuples & Sets",
        syntax: [
            { code: '(1, 2, 3)', desc: 'Tuple literal' },
            { code: 'a, b = tuple', desc: 'Tuple unpacking' },
            { code: '{1, 2, 3}', desc: 'Set literal' },
            { code: 'set()', desc: 'Empty set' }
        ],
        functions: [
            { name: 'set.add(x)', desc: 'Add element' },
            { name: 'set.remove(x)', desc: 'Remove element' },
            { name: 'set.discard(x)', desc: 'Remove if exists' },
            { name: 'a & b', desc: 'Intersection' },
            { name: 'a | b', desc: 'Union' },
            { name: 'a - b', desc: 'Difference' }
        ],
        examples: [
            { title: 'Tuple', code: 'point = (10, 20)\nx, y = point' },
            { title: 'Set operations', code: 'a = {1, 2, 3}\nb = {2, 3, 4}\na & b  # {2, 3}' },
            { title: 'Remove duplicates', code: 'unique = list(set([1,1,2,2,3]))' }
        ],
        errors: [
            { error: 'TypeError', cause: 'Tuples are immutable' },
            { error: 'KeyError', cause: 'set.remove() on missing element' }
        ]
    },

    // Lesson 14: File I/O
    14: {
        title: "File I/O",
        syntax: [
            { code: 'open(file, mode)', desc: 'Open file' },
            { code: 'with open(...) as f:', desc: 'Context manager' },
            { code: '"r" "w" "a"', desc: 'Read/write/append modes' }
        ],
        functions: [
            { name: 'f.read()', desc: 'Read entire file' },
            { name: 'f.readline()', desc: 'Read one line' },
            { name: 'f.readlines()', desc: 'Read all lines as list' },
            { name: 'f.write(str)', desc: 'Write string' },
            { name: 'f.writelines(list)', desc: 'Write list of strings' },
            { name: 'f.close()', desc: 'Close file' }
        ],
        examples: [
            { title: 'Read file', code: 'with open("file.txt") as f:\n    content = f.read()' },
            { title: 'Write file', code: 'with open("out.txt", "w") as f:\n    f.write("Hello")' },
            { title: 'Read lines', code: 'for line in open("file.txt"):\n    print(line.strip())' }
        ],
        errors: [
            { error: 'FileNotFoundError', cause: 'File does not exist' },
            { error: 'PermissionError', cause: 'No write permission' }
        ]
    },

    // Lesson 15: Decorators
    15: {
        title: "Decorators",
        syntax: [
            { code: '@decorator', desc: 'Apply decorator' },
            { code: 'def deco(func):', desc: 'Decorator function' },
            { code: '@functools.wraps', desc: 'Preserve metadata' }
        ],
        functions: [
            { name: '@property', desc: 'Getter property' },
            { name: '@staticmethod', desc: 'Static method' },
            { name: '@classmethod', desc: 'Class method' },
            { name: '@functools.lru_cache', desc: 'Memoization' }
        ],
        examples: [
            { title: 'Basic decorator', code: 'def uppercase(func):\n    def wrapper(*args):\n        return func(*args).upper()\n    return wrapper' },
            { title: 'Apply decorator', code: '@uppercase\ndef greet(name):\n    return f"hello {name}"' },
            { title: 'Result', code: 'greet("world")  # "HELLO WORLD"' }
        ],
        errors: [
            { error: 'TypeError', cause: 'Decorator must return callable' },
            { error: 'AttributeError', cause: 'Missing functools.wraps' }
        ]
    },

    // Lesson 16: Generators
    16: {
        title: "Generators",
        syntax: [
            { code: 'yield value', desc: 'Yield value' },
            { code: '(x for x in iter)', desc: 'Generator expression' },
            { code: 'next(gen)', desc: 'Get next value' }
        ],
        functions: [
            { name: 'yield', desc: 'Produce value, pause' },
            { name: 'next(gen)', desc: 'Resume generator' },
            { name: 'iter(obj)', desc: 'Get iterator' },
            { name: 'list(gen)', desc: 'Consume generator' }
        ],
        examples: [
            { title: 'Generator function', code: 'def countdown(n):\n    while n > 0:\n        yield n\n        n -= 1' },
            { title: 'Use generator', code: 'for num in countdown(3):\n    print(num)  # 3, 2, 1' },
            { title: 'Generator expr', code: 'squares = (x**2 for x in range(10))' }
        ],
        errors: [
            { error: 'StopIteration', cause: 'Generator exhausted' },
            { error: 'TypeError', cause: 'Object is not iterable' }
        ]
    },

    // Lesson 17: Regular Expressions
    17: {
        title: "Regular Expressions",
        syntax: [
            { code: 'import re', desc: 'Import re module' },
            { code: 'r"pattern"', desc: 'Raw string pattern' },
            { code: '.  *  +  ?', desc: 'Any, 0+, 1+, 0-1' },
            { code: '\\d \\w \\s', desc: 'Digit, word, space' },
            { code: '[abc] [^abc]', desc: 'Char class, negated' }
        ],
        functions: [
            { name: 're.search(pat, s)', desc: 'Find first match' },
            { name: 're.match(pat, s)', desc: 'Match at start' },
            { name: 're.findall(pat, s)', desc: 'Find all matches' },
            { name: 're.sub(pat, repl, s)', desc: 'Replace matches' },
            { name: 're.split(pat, s)', desc: 'Split by pattern' }
        ],
        examples: [
            { title: 'Find numbers', code: 'import re\nre.findall(r"\\d+", "a1b2c3")  # ["1","2","3"]' },
            { title: 'Replace', code: 're.sub(r"\\d", "X", "a1b2")  # "aXbX"' },
            { title: 'Validate', code: 'if re.match(r"^\\w+$", name):\n    print("valid")' }
        ],
        errors: [
            { error: 're.error', cause: 'Invalid regex pattern' },
            { error: 'AttributeError', cause: 'No match found (None.group())' }
        ]
    },

    // Lesson 18: JSON
    18: {
        title: "JSON",
        syntax: [
            { code: 'import json', desc: 'Import json module' },
            { code: 'json.loads(str)', desc: 'Parse JSON string' },
            { code: 'json.dumps(obj)', desc: 'Convert to JSON string' }
        ],
        functions: [
            { name: 'json.load(file)', desc: 'Read JSON from file' },
            { name: 'json.dump(obj, file)', desc: 'Write JSON to file' },
            { name: 'json.loads(s)', desc: 'Parse JSON string' },
            { name: 'json.dumps(obj)', desc: 'Stringify object' },
            { name: 'json.dumps(obj, indent=2)', desc: 'Pretty print' }
        ],
        examples: [
            { title: 'Parse JSON', code: 'import json\ndata = json.loads(\'{"name": "Alice"}\')\nprint(data["name"])' },
            { title: 'Create JSON', code: 'person = {"name": "Bob", "age": 30}\njson_str = json.dumps(person)' },
            { title: 'File I/O', code: 'with open("data.json") as f:\n    data = json.load(f)' }
        ],
        errors: [
            { error: 'JSONDecodeError', cause: 'Invalid JSON syntax' },
            { error: 'TypeError', cause: 'Object not JSON serializable' }
        ]
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = REFERENCE_DATA;
}
