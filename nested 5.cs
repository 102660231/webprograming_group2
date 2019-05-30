/*
 * Created by SharpDevelop.
 * User: 102660231
 * Date: 18/04/2019
 * Time: 2:29 PM
 * 
 * To change this template use Tools | Options | Coding | Edit Standard Headers.
 */
using System;

namespace nested5
{
	class Program
	{
		public static void Main(string[] args)
		{            int rows = 4;
            int nextline= 0;
            int line = 0;
            while (nextline <= rows)
            {
                line = 0;
                while (line <=nextline)
                {
                    Console.Write("*");
                    line++;
                }
                Console.WriteLine("\n");
                nextline++;
            }

            Console.ReadLine();

		}
	}
}