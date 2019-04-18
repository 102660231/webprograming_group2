/*
 * Created by SharpDevelop.
 * User: 102660231
 * Date: 18/04/2019
 * Time: 2:25 PM
 * 
 * To change this template use Tools | Options | Coding | Edit Standard Headers.
 */
using System;

namespace nested_1
{
	class Program
	{
		public static void Main(string[] args)
		{
			            string name = Console.ReadLine();
            
            int counter = 0;
            //set max counter for lines =10

            while (counter < 10)
            {
                int counter2 = 0;
                //set max name per line =10

                while (counter2 < 10)
                {
                    Console.Write(name);
                    counter2++;  //++counter2  //counter2 += 1;  //counter2 = counter2 + 1;
                } // end while (counter2 >10

                Console.WriteLine();
                //increased 1 to next line counter
                counter++;

            } // end while (counter > 10)

            Console.Write("Press any key to continue . . . ");
            Console.ReadKey(true);

        }
    }
}
            Console.Write("Press any key to continue . . . ");
            Console.ReadKey(true);

		}
	}
}