import visaLogo from '../assets/images/visa.png';
import masterLogo from '../assets/images/master-card.svg';

const CreditCard = (props) => {
  const lastDigits = props.number.slice(-4);
  const censored = `**** **** **** ***** ${lastDigits}`;
  const typeSourcePath = props.type === 'Visa' ? visaLogo : masterLogo;
  return (
    <div
      className="credit-card"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <img src={typeSourcePath} alt={typeSourcePath} width={32} />
      <h4>{censored}</h4>
      Expires {props.expirationMonth}/{props.expirationYear - 2000} {props.bank}
      <br />
      {props.owner}
    </div>
  );
};

export default CreditCard;
