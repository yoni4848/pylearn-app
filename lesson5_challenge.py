fav_movies = ["Scary Movies", "movie2", "movie3", "movie4", "movie5"]
print(fav_movies[0], fav_movies[-1])

scores = [85, 92, 78, 90, 88, 76, 95, 89]

print(max(scores))
print(sum(scores) / len(scores))
print(f"Scores above 85: {len([s for s in scores if s > 85])}")
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

print(nums[1::2])
