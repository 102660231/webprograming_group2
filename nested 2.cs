/*
 * Created by SharpDevelop.
 * User: 102660231
 * Date: 18/04/2019
 * Time: 2:23 PM
 * 
 * To change this template use Tools | Options | Coding | Edit Standard Headers.
 */
using System;

namespace nested_2
{
	class Program
	{
		public static void Main(string[] args)
		{
			Console.Write("Please enter your name: ");
            string name = Console.ReadLine();

            //ask how many times to print
            int userinput;

            
            Console.Write("How many times you want to print your name ? ");
            userinput =int.Parse( Console.ReadLine());

           
            
            int counter = 0;


            while (counter < userinput)
            {
               
                
               
                    Console.WriteLine(name);

                
                counter++;

            } // end while counter = count 



            Console.Write("Press any key to continue . . . ");
            Console.ReadKey(true);


			
		}
	}
}