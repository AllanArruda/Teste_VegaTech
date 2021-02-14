using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Teste_VegaTech.Models;

namespace Teste_VegaTech.Data
{
    public class Teste_VegaTechContext : DbContext
    {
        public Teste_VegaTechContext (DbContextOptions<Teste_VegaTechContext> options)
            : base(options)
        {
        }

        public DbSet<Teste_VegaTech.Models.Material> Material { get; set; }

        public DbSet<Teste_VegaTech.Models.Supplier> Supplier { get; set; }
    }
}
