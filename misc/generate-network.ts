import * as fs from 'fs';

const names = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank", "Grace", "Hank", "Irene", "Jack"];
const roles = ["Manager", "Developer", "Designer", "CTO", "Analyst", "HR", "Intern", "CEO", "CFO", "Engineer"];
const cities = ["New York", "San Francisco", "Los Angeles", "Chicago", "Seattle", "Boston", "Denver", "Austin", "Miami", "Atlanta"];
const industries = ["Technology", "Healthcare", "Finance", "Education", "Retail"];
const skills = ["Python", "JavaScript", "Design", "Data Analysis", "HR Management", "Cybersecurity", "Project Management", "Marketing", "Sales", "Cloud Computing"];
const universities = ["MIT", "Stanford", "UCLA", "Harvard", "Yale", "Princeton", "UC Berkeley", "Columbia", "Chicago", "NYU"];

function getRandomItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}

function generateGql(numPeople: number = 50, numCompanies: number = 5, numProjects: number = 10, numLinks: number = 200): string {
    const people = Array.from({ length: numPeople }, (_, i) =>
        `(p${i}:Person {name: '${getRandomItem(names)}', age: ${20 + i % 40}, role: '${getRandomItem(roles)}', city: '${getRandomItem(cities)}'})`
    );

    const companies = Array.from({ length: numCompanies }, (_, i) =>
        `(c${i}:Company {name: 'Company${i}', industry: '${getRandomItem(industries)}', founded: ${1900 + i * 5}})`
    );

    const projects = Array.from({ length: numProjects }, (_, i) =>
        `(proj${i}:Projekt {name: 'Project${i}', budget: ${100000 + i * 50000}, deadline: '202${5 + i % 5}-12-31'})`
    );

    const relations: string[] = [];
    while (relations.length < numLinks) {
        const personIndex = Math.floor(Math.random() * numPeople);
        const person = `p${personIndex}`;
        const targetType = ["Company", "Projekt", "Person", "Skill", "University"][Math.floor(Math.random() * 5)];
        let target: string;
        let relation: string;

        if (targetType === "Company") {
            target = `c${Math.floor(Math.random() * numCompanies)}`;
            relation = ["WORKS_AT", "PARTNERS_WITH"][Math.floor(Math.random() * 2)];
        } else if (targetType === "Projekt") {
            target = `proj${Math.floor(Math.random() * numProjects)}`;
            relation = ["WORKS_ON", "MANAGES"][Math.floor(Math.random() * 2)];
        } else if (targetType === "Skill") {
            target = `s${relations.length}`;
            relation = "HAS_SKILL";
            relations.push(`(${person})-[:${relation}]->(:Skill {name: '${getRandomItem(skills)}'})`);
            continue;
        } else if (targetType === "University") {
            target = `u${relations.length}`;
            relation = "ATTENDED";
            relations.push(`(${person})-[:${relation}]->(:University {name: '${getRandomItem(universities)}'})`);
            continue;
        } else {
            let targetIndex = Math.floor(Math.random() * numPeople);
            while (targetIndex === personIndex) {
                targetIndex = Math.floor(Math.random() * numPeople);
            }
            target = `p${targetIndex}`;
            relation = ["FRIENDS_WITH", "MENTORS"][Math.floor(Math.random() * 2)];
        }

        relations.push(`(${person})-[:${relation}]->(${target})`);
    }

    return "INSERT\n  " + [...people, ...companies, ...projects, ...relations].join(',\n  ') + ".";
}

// Generate and save the query to a file
const query = generateGql(100, 10, 20, 500);
fs.writeFileSync("generated_gql.txt", query);

console.log("GraphQL query generated and saved to generated_gql.txt");
