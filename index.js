//CHAMANDO AS CLASSES
import {Cliente} from "./Sistema-BityBank/Cliente.js"
import {ContaCorrente} from "./conta/ContaCorrente.js"
import {ContaPoupanca} from "./Sistema-BityBank/conta/ContaPoupanca.js"
import {ContaSalario} from "./Sistema-BityBank/conta/ContaSalario.js"
import {Gerente} from "./Sistema-BityBank/funcionarios/Gerente.js"
import {Diretor} from "./Sistema-BityBank/funcionarios/Diretor.js"
import {SistemaAutenticacao} from "./Sistema-BityBank/funcionarios/SistemaAutenticacao.js"


//VARIÁVEIS
const cliente1 = new Cliente("João", 11122233340);
const cliente2 = new Cliente ("Paula", 88822233309);
const ContaCorrenteJoão = new ContaCorrente (0, cliente1, 1001);
//const ContaCorrentePaula = new Conta (0, cliente2, 1002);
const ContaPoupancaJoão = new ContaPoupanca(60, cliente1, 1001);
const ContaSalarioPaula = new ContaSalario(cliente2);


const diretor = new Diretor("Fernando", 10000, 12345678900);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Bianca", 5000, 23456789100);
gerente.cadastrarSenha("123");

const cliente = new Cliente ("Lorena", 78901234567, "456");


const estaLogadoDiretor = SistemaAutenticacao.login(diretor, "123456");
const estaLogadoGerente = SistemaAutenticacao.login(gerente, "123");

const estaLogadoCliente = SistemaAutenticacao.login(cliente, "345");

//INICIO DE TESTES DO PROGRAMA

ContaCorrenteJoão.depositar(500);
ContaCorrenteJoão.sacar(100);
//console.log(ContaCorrenteJoão);
ContaPoupancaJoão.sacar(10);
ContaSalarioPaula.depositar(300);
ContaSalarioPaula.sacar(100);


console.log(estaLogadoDiretor);
console.log(estaLogadoGerente);
console.log(estaLogadoCliente);





