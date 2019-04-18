/*
 * Created by SharpDevelop.
 * User: 102660231
 * Date: 18/04/2019
 * Time: 2:28 PM
 * 
 * To change this template use Tools | Options | Coding | Edit Standard Headers.
 */
using System;

namespace nested_4
{
	class Program
	{
		public static void Main(string[] args)
		{
			int userinput;
                int rowCounter
                    , colum, rows, textCounter;
                // get input from user no of row
                Console.Write("How many rows of * you want to create :");
                userinput = int.Parse(Console.ReadLine());
                rows = userinput;
                colum = rows;

                rowCounter = 1;
                while (rowCounter <= rows)
                {
                    textCounter = colum;
                    while (textCounter >= 1)
                    {
                        Console.Write("*");
                        textCounter = textCounter - 1;
                    }
                    Console.Write("\n");
                    colum = colum - 1;
                    rowCounter = rowCounter + 1;
                }
                Console.ReadLine();


		}
	}
}