## **Lifestyle and Food Consumption Habits Impacts on Obesity**
### Our goal for this project was to perform a general assessment of obesity rates in correlation to the frequency of food consumption and analyze the effects of daily habits among individuals with high obesity rates.
### We decided the best way to perform this assesment was by developing 3 research questions that narrow in on certain relationships amongst obesity and a selection of lifestyle and eating habits.
--------
## **Research questions**
## The three research questions we developed were:
1. **Are there any noticeable trends in the geographic distribution of obesity across the United States?**
2. **What is the distribution in an obese persons vegitable consumption, amount of main meals, frequency of physical activity, and food consumed in between meals**
3. **Are there any similaraties in the vegitable consumption, amount of main meals, frequency of physical activity, and food consumed in between meals across the different levels of obesity**

----------
# **Visualizations**

#### We developed 3 different sets of visualizations that we felt best displayed the answers to our research questions. To answer our first question we built a choropleth map that displays the different Obesity Rate Percentages across all of the US. The color range from a dark red to a light yellow, with red being the highest in obesity and yellow being the lowest.


https://github.com/user-attachments/assets/be355171-689a-48b4-980d-313a089f5068

#### A common trend we noticed on this map was the high levels of obesity in the mid western US and the lower levels of obesity in the coastal cities. Based on this evidence we were able to make the assumption that due to the surban and rural layout in many of the midwestern states it is much more common for people to travel by car or bus as opposed to walking. The lack of a walkable city layout could be the cause of a higher distribution of obese people in these states. 
-------
#### Secondly, we created 4 different pie charts to compare the difference in the frequency of certain lifestyle habits amongst obese people. The four different habits were: frequency of vegetable consumption, number of main meals, physical activity frequency, and consumption of food between meals. Each of these habits was assessed on scale of 0-3, with 0 meaning never and 3 meaning very frequently.


https://github.com/user-attachments/assets/4ebad7bf-0745-44aa-a98d-ce1c4816fe96

#### When assesing each of these factors seperately, we noticed:
1. **Frequency of Vegetable Consumption** - The amount of obese people who rated their frequency of vegetable consumption a 2 or 3 were very similar with 652 people saying 3 and 600 people saying 2. This came as a shock to us because it is commonly believed that a cause of obesity is a lack of vegetable intake. However, after further consideration we came to the conclusion that the probable cause of this outcome was the fact that one of the leading causes of obesity is an overconsumpiton in food, whether that be junk food or vegetables.
2. **Number of Main Meals** - The results displayed by this data were of no shock to us. Looking at this pie chart we can see that the most common amounts of main meals in a day for obese people are 3 and more than 4 meals (We made the assumption that other in the data set represented 4+ meals).
3. **Physical Activity Frequency** - Similarly to the previous pie chart, these results were to be expected. The physical activity frequency with the highest counts was 0 or never. Lack of physical activity is also something that is widely considered a leading factor in obesity.
4. **Consumption of Food Between Meals** - The distribtion of the frequencies for this category also came as a surprise to us. Based on this pie chart, obese people most commonly do not consume food between meals often. This was something we decided we would need to conduct a deeper analysis on, however, we were stopped by the limitations of this dataset which will be discussed in a later portion of the README.
-----

https://github.com/user-attachments/assets/e92accb4-d098-4c99-a94b-956aa058a800


#### Lastly, We created a radar chart that allows you to select different levels of obesity and see how they compare across the four factors.The key takeaway from the chart is the highest level of obesity (over 45 BMI) was on the lowest end of Physical Activity Frequency, highest number of main meals, and highest frequency of consumption, but lowest level of consumption of food between meals.  The thing that is most fascinating, is the normal and insufficient weight categories and the highest level of consumption between meals compared to the obese and overweight categories.  It is commonly said that those who eat more throughout the day, (depending on what they eat of course), tend to have a higher metabolism and thus a better overall weight/BMI.  The normal weight (and insufficient) is around 1.5 consumption between meals and all of the other categories are right at one. From this we can conclude, the number of main meals does not really correlate as we have insufficient weight and Obesity Type 3 at around the same at 2.9 and 3. The other categories are all around 2.5.
------
#### For a little bit more of a direct comparison of subjects, we created a tool that allows you to select two different subjects and compare them on the radar chart. There is also a panel that displays some of the subjects metrics such as their: age, gender, height, obesity level and BMI.


https://github.com/user-attachments/assets/a99b1f93-8c18-4d12-b7b2-f52148a5a8dc

# **Limitations**
#### The biggest limitations we faced when working with this data was the lack of explanation on the scaling of the data. This caused us to have to make many assumptions to fill in the blanks. When looking at the data set, you see that most of the values for the columns range from 1-4 even when a scale or numeric value does not seem fitting. This forced us to remove a few of the columns because the description of the data set lacked any information on how to properly interpret this data.

#### Another limitation we ran into was the lack of geographic data in the dataset. We believed that with information on the location of the people from the sample we would have been able to conduct a deeper analysis.
------------
# **Resources**
#### Data sets:
1. https://www.kaggle.com/datasets/abdelrahman16/obesity-dataset
2. https://catalog.data.gov/dataset/national-obesity-by-state-2094c/resource/f41aefe8-d132-4a56-bd65-2319069e9476
#### Documentation:
1. https://www.chartjs.org/
