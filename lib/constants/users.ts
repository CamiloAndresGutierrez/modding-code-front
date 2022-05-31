const STUDENT = 'ModdingCodeProdStudent';
const EXPERT = 'ModdingCodeProdExpert';

const users = {
    EXPERT,
    STUDENT
}

export const nameToUser = new Map([[STUDENT, "STUDENT"], [EXPERT, "EXPERT"]]);

export default users;