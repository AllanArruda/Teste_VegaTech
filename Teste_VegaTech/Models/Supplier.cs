using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Teste_VegaTech.Models
{
    public class Supplier
    {
        public int Id { get; set; }
        public int CNPJ { get; set; }
        public int CEP { get; set; }
        public string QRCode { get; set; }
        public DateTime RegisterDate  { get; set; }
    }
}
