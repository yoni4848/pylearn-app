for i in range(20):
    if (i + 1) % 2 == 0:
        print(i + 1, end=" ")
print("")
fact = 1
num = 5
i = num
while i > 0:
    fact *= i
    i -= 1

print(f"Factorial({num}) = {fact}")

num = 100.00

while num >= 1:
    print(num)
    num /= 2
