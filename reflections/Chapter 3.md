In the beginning of chapther three in the book Clean Code, A Handbook of Agile Software Craftmanship, there is a statement regarding function length. And it states that functions should be just 3 - 4 lines long! I truly think that is kind off impossible and more of a utopian view. 


I have in general adapted a "one function, one task" mindset when writing my functions. Which according to the book is a very positive behaviour. And I do agree, to some degree. I do find the use of the bigger functions that are not heavily built on functionallity but more delegate tasks to other functions. 

The idea that the book presents that try/catch methods are ugly and confusing I do not share. Especially when working with http calls I want to be sure that my code runs in the order that im telling it too. And then try/catch methods are of use in a function. However I do realize when it comes to readability this is not the preferred way. If I think about it, If I would be presented with a codebase I would way rather have the try/catch method broken out into its own function. 

D.R.Y.... I think there is no other concept that have been more beaten into us at this point. And honestly, I do still repeat myself from time to time. When looking back at my code from previous projects I do realize that the functions I write are very specific. They handle one specific case with one or more specific variables. Therefore it is difficult to reuse them. That is a practice I do need to get better at. 

The idea of more arguments in a function increases the cognitive load on the developer was incredible to hear for me. I have, for some reason, thougth that code in the workplace will be grander, bigger & better than everything we have done so far. Which probably still is true. However regarding the arguments, I have to admit that it took some time for me to realize the arguments place in coding. Especially in languages like java. Now I do think I've got it under controll. But that was one of the things that worried me about working with code. The added difficulty to the code. Therefore for me it was a great relief when the book listed:
0 (niladic, best), 
1 (monoadic, OK), 
2 (dyadic, OK), 
3 or more (polyadic, should always be avoided)