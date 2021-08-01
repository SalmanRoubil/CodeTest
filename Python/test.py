
import numpy as np
import matplotlib.pyplot as plt
from PIL import Image

## load image with PIL Image
cat_image_name = "./cat_image.jpg"
cat_image = Image.open(cat_image_name)

# show original image
fig, ax = plt.subplots()
print(np.array(cat_image).shape)
ax.set_title("original image")
ax.imshow(cat_image)
plt.show()


## Task 1: Resize Image

#Resize the original image into size (64, 64) with the help of `resize` function of module `Image`.


### START CODE HERE ###

resized_cat_image = cat_image.resize((64,64))


### END CODE HERE ###

# show resized image
print(np.array(resized_cat_image).shape)
fig, ax = plt.subplots()
ax.set_title("resized image")
ax.imshow(resized_cat_image)
plt.show()


pixels = np.array(resized_cat_image)
# ### START CODE HERE ###
mean = np.mean(pixels)
std = np.std(pixels)
standarized_pixels = (pixels - mean) / std


### End CODE HERE ###

print(standarized_pixels.shape)
print(standarized_pixels)

