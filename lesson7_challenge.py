def is_even(n):
    if (n % 2) == 0:
        return True
    return False


_sentinel = object()


def calculate_area(length, width=_sentinel):
    if width is not _sentinel:
        return length * width
    else:
        return length**2


def analyze_scores(scores):
    return (
        len(scores),
        sum(scores) / len(scores),
        max(scores),
        len([s for s in scores if s >= 60]),
    )


print(is_even(10))
print(calculate_area(4, 5))
print(calculate_area(10))
length, average, max, above = analyze_scores([77, 54, 56, 78, 99, 87])

print(
    f"Number of scores: {length}\nAverage score: {average}\nMaximum score: {max}\nAbove 60: {above}"
)
