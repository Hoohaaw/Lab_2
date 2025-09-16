When reading Chapter two in the book Clean Code, A Handbook of Agile Software Craftmanship, I made it about half a page before I could see flaws in my own naming conventions. I tend to try and create names that are short and precise because the code, in my eyes, when finished looks concise and purposeful. For example in a function that handles a mathematical equation the variable names "x", "y" & "z" just seems to fit. And when the function is fully developed and works the overall look of the code is "tight". However that in its return does not show any of the intention behind the variable. That is something the book brings forward early in chapter 2 which made me reflect on my naming ways in code. 

Of course there are times when coding that I very purposfully try to be crystal clear about my naming conventions. For example a fetch function would be something like, fetchImageFromWebsite(url). However when it comes to variables I've realised im not that specific about the naming. 

The book also talks about the importance of intention when naming. What is this variable for, and how is it being used? Thinking about naming conventions in that way shifts the perspective from just “making code run” to “making code communicate.”

For example, if a variable is used in a conditional, we should name it so that the if statement almost reads like plain English.

You could do: 

if (x > y) {
    return true;
} else {
    return false;
};

This works, but without context it’s impossible to know why the comparison matters. By choosing more descriptive names, the code itself explains the intention:

if (daysSinceBookLoaned > loanPeriodInDays) {
    return true;
} else {
    return false;
};

Now it’s immediately clear what the check is for and why it exists. With meaningful names, code becomes not just executable, but readable and self-explanatory.

Whilst reading the second chapter in the course litterature I realized another flaw in my namings. When I am writing code and get stuck somewhere it is easy for me to create temporary variables. For example fetchedData becomes fetchedDataTest, fetchedDataTestArray and so on. Which works in the moment when im testing things in the code. However when the code finally works those variables tend to stick around.



Key takeaways for me and my naming conventions from chapter two:

- Write variable names that are descriptive but also ease the use of them dependent on their intent. 

- I do not have the issues with what the author describes in the sections "Dont be cute" & "Dont Pun". I have not purposly made changes to my naming conventions to not include clever or funny names. I just dont do it.

- I actually thought my naming conventions were better than thay probably are. I've tried to be as objective in my naming as much as possible, however I did not realize the broader spectrum. Whilst reading this chapter it becomes clear that names in code are more important than I originally thought. And how big of an impact well named code can have on a project or even a company in whole. 