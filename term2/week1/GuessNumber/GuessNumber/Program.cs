using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GuessNumber
{
    class Program
    {
        static void Main(string[] args)
        {
            int Answer = 77;
            int[] guessnumber = new int[7];

        
            // bool gameover = false; 
            int counter = 0;
            bool gameover = false;
        
            while (gameover==false)
            {

                Console.WriteLine("Please enter your guess");
                guessnumber[counter] = int.Parse(Console.ReadLine());

                if (guessnumber[counter] == Answer  )
                {
                    //gameover = true; 

                    Console.WriteLine("you got the number :-" + Answer);
                    Console.WriteLine("list of your guess ");


                    foreach (var i in guessnumber)

                    { Console.WriteLine(i);
                        Console.ReadKey();
                        gameover = true;
                    }
                       
                }
                if (guessnumber[counter] > Answer)
                {
                    Console.WriteLine("Your guess is greater than answer");
                }




                else if (guessnumber[counter] < Answer)

                {
                    Console.WriteLine("Your guess in lower than answer");
                    
                }
                counter++;
                if (counter > 6)
                {
                    Console.WriteLine("  sorry guess over 7 trials  ");

                    foreach (var i in guessnumber)

                    {
                        
                        Console.WriteLine("list of your guess :  "  +i);
                        
                        Console.ReadKey();
                        
                    }
                    gameover = true;
                }
              
            }


        }
    }
}
