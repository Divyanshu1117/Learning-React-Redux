function Hello() {
    // let myName = 'Divyanshu';
    let number = 456;
    let fullName = () => {
        return 'Divyanshu';
    }
    return <p>
        MessageNo: {number} I am your master {fullName()}
    </p>
}

export default Hello;