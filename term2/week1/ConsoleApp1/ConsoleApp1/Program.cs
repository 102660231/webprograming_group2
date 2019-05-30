using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        private static string helloClass = "Hello, class!";

        static void Main(string[] args)
        {
            string helloLocal = "Hello, local!";
            Console.WriteLine(helloLocal);
            Console.WriteLine(Program.helloClass);
            DoStuff();
        }

        static void DoStuff()
        {
            Console.WriteLine("A message from DoStuff: " + Program.helloClass);
            Console.ReadLine();
        }
    }



}

        