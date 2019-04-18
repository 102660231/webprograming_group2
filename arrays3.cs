/*
 * Created by SharpDevelop.
 * User: 102660231
 * Date: 18/04/2019
 * Time: 2:31 PM
 * 
 * To change this template use Tools | Options | Coding | Edit Standard Headers.
 */
using System;

namespace arrays2
{
	class Program
	{
		public static void Main(string[] args)
		{
			            //set new value to array //
            //array quention 2//
           // int count = 0;

            int[] numbers = new int[10];
            numbers[0] = 34;
            numbers[1] = 5;
            numbers[2] = 67;
            numbers[3] = 1;
            numbers[4] = 99;
            numbers[5] = 39;
            numbers[6] = 44;
            numbers[7] = 78;
            numbers[8] = 34;
            numbers[9] = 0;

            int total = 0;
            int counter = 0;
            while (counter < 10)
            {
                total = total + numbers[counter];
                counter++;
                Console.Write(total);
            }
            Console.Write("   total is    " + total);
            Console.Read();

		}
	}
}