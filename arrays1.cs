﻿/*
 * Created by SharpDevelop.
 * User: 102660231
 * Date: 18/04/2019
 * Time: 2:30 PM
 * 
 * To change this template use Tools | Options | Coding | Edit Standard Headers.
 */
using System;

namespace arrays1
{
	class Program
	{
		public static void Main(string[] args)
		{
		string name;
            int count = 1;
            String[] storename = new string[5];
            int counter = 0;
            while (counter <storename.Length)
            {
                Console.WriteLine("Enter 5 times of name here, please enter name no "+count);
                name = Console.ReadLine();

                //store input name to store array//
                storename[counter] = name;
                counter++;
                count++;

            }
            counter = 0;
            while (counter < storename.Length)
            {
                Console.WriteLine("Hello " + storename[counter]);
                    counter++;
               

            }
            Console.ReadLine();

	
		}
	}
}