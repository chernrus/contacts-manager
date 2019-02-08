import React,  { Component } from 'react';
import Spinner from './Spinner';

class Loader extends Component {

  constructor() {
    super();

    this.state = {
      isLoading: false
    }

    this.loadData = this.loadData.bind(this);
  }

  loadData() {
    this.setState({
      isLoading: true
    });

    const { onLoad, onError } = this.props;

    let url = 'http://www.filltext.com/?delay=3&rows=50&name={firstName}~{lastName}&phone={phone|format}&id={number|1000}}&email={email}&description={lorem|6}&pretty=true;'
    // doesn't allow http uncomment if run local!

    // fetch(url)
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     this.setState({
    //       isLoading: false
    //     });
    //     onLoad(data);
    //   })
    //   .catch((error) => {
    //     this.setState({
    //       isLoading: false
    //     });
    //     onError(error.message);
    //   });

      onLoad(TEST_DATA);
  }

  render() {

    const { isLoading } = this.state;

    return(
      <div className="test-block">
        {isLoading && <Spinner />}
        <div className="test-data-button">
          <button onClick={this.loadData}>Load Test Data</button>
        </div>
      </div>
    )
  }
}

const TEST_DATA = [
    {
        "name": "Brittany Mize",
        "phone": "(982)493-5928",
        "id": 953,
        "email": "BPoe@pulvinar.io",
        "description": "pretium tincidunt vitae lorem sit lacus"
    },
    {
        "name": "Luping Brooks",
        "phone": "(176)378-9787",
        "id": 425,
        "email": "TNuccio@nunc.org",
        "description": "tortor eros sit nec risus vel"
    },
    {
        "name": "Huijun Hampton",
        "phone": "(684)584-9979",
        "id": 953,
        "email": "DDubrow@neque.com",
        "description": "mi fringilla pretium dolor mi curabitur"
    },
    {
        "name": "Coty Cocolla",
        "phone": "(405)010-5668",
        "id": 853,
        "email": "ESoto@mattis.ly",
        "description": "facilisis vestibulum lacus pretium sit at"
    },
    {
        "name": "Bingmei Wuertz",
        "phone": "(243)389-5756",
        "id": 895,
        "email": "MBeonde@fringilla.io",
        "description": "lacus sit at sollicitudin fringilla vestibulum"
    },
    {
        "name": "Siripen Buikema",
        "phone": "(858)231-0329",
        "id": 564,
        "email": "DCarstens@sagittis.com",
        "description": "eros aenean lacus convallis aliquam ac"
    },
    {
        "name": "Tasha Kraenzle",
        "phone": "(424)996-4261",
        "id": 661,
        "email": "DZiegler@eros.com",
        "description": "libero eros ante massa convallis amet"
    },
    {
        "name": "Vittorio Psarros",
        "phone": "(733)005-9465",
        "id": 797,
        "email": "KCarrothers@placerat.io",
        "description": "massa id dui placerat et porttitor"
    },
    {
        "name": "Gary Blayne",
        "phone": "(997)668-5817",
        "id": 771,
        "email": "KAviles@tortor.net",
        "description": "vestibulum libero dolor curabitur sed placerat"
    },
    {
        "name": "Deborah Scheider",
        "phone": "(390)379-6773",
        "id": 224,
        "email": "OWelle@eget.com",
        "description": "sed sollicitudin massa amet nullam massa"
    },
    {
        "name": "RoMeka Short",
        "phone": "(667)924-9743",
        "id": 112,
        "email": "MKenedy@dui.org",
        "description": "odio quis egestas eget vitae porttitor"
    },
    {
        "name": "Cecilia Sawyer",
        "phone": "(290)360-8352",
        "id": 445,
        "email": "FCocolla@mattis.org",
        "description": "sollicitudin sollicitudin placerat et velit sollicitudin"
    },
    {
        "name": "Marcedia Briley",
        "phone": "(219)882-6856",
        "id": 839,
        "email": "JBuikema@massa.net",
        "description": "molestie massa et at donec dolor"
    },
    {
        "name": "Carlo Bernstein",
        "phone": "(730)780-9638",
        "id": 932,
        "email": "AMarks@fringilla.com",
        "description": "mi malesuada curabitur quis aliquam nullam"
    },
    {
        "name": "Andrea Wrather",
        "phone": "(127)365-3886",
        "id": 408,
        "email": "YWatson@tempor.io",
        "description": "rutrum placerat vitae libero elit vitae"
    },
    {
        "name": "Yelena Salguero",
        "phone": "(354)143-5441",
        "id": 544,
        "email": "VLiao@hendrerit.gov",
        "description": "at sed aliquam odio aliquam malesuada"
    },
    {
        "name": "Morticia Comeau",
        "phone": "(787)593-3194",
        "id": 53,
        "email": "NBjurback@dui.ly",
        "description": "sed non ante sed porta eget"
    },
    {
        "name": "Leonard Lamsargis",
        "phone": "(299)005-5077",
        "id": 942,
        "email": "HObermann@molestie.io",
        "description": "sollicitudin aenean lacus sollicitudin lacus eget"
    },
    {
        "name": "Leo Tang",
        "phone": "(420)371-5181",
        "id": 403,
        "email": "TGreene@tincidunt.ly",
        "description": "aliquam aenean sed morbi tincidunt at"
    },
    {
        "name": "Erickson Turich",
        "phone": "(103)059-4745",
        "id": 471,
        "email": "SFlanagan@morbi.ly",
        "description": "at rutrum aliquam tempor facilisis aenean"
    },
    {
        "name": "Anthony Watson",
        "phone": "(942)968-9482",
        "id": 66,
        "email": "YBowman@aliquam.net",
        "description": "aliquam tincidunt fringilla lectus pulvinar fringilla"
    },
    {
        "name": "Lori Mccracken",
        "phone": "(182)415-5049",
        "id": 113,
        "email": "ABowman@massa.org",
        "description": "tincidunt adipiscing odio sit rutrum sed"
    },
    {
        "name": "Rocelyn Wollf",
        "phone": "(457)786-6962",
        "id": 946,
        "email": "RKovach@elementum.io",
        "description": "porta quis pretium massa tincidunt dui"
    },
    {
        "name": "Woo Merle",
        "phone": "(155)637-4555",
        "id": 468,
        "email": "NDrolet@lacus.net",
        "description": "aliquam morbi orci tellus massa pharetra"
    },
    {
        "name": "Nikko Krugel",
        "phone": "(298)841-3318",
        "id": 504,
        "email": "LCrenshaw@dolor.org",
        "description": "mattis lorem ac nec mattis libero"
    },
    {
        "name": "Katie Schatz",
        "phone": "(484)049-7511",
        "id": 750,
        "email": "AHalligan@vel.io",
        "description": "consectetur pulvinar pretium aliquam eros vitae"
    },
    {
        "name": "Jeanneth Wrather",
        "phone": "(858)412-3768",
        "id": 994,
        "email": "JLau@suspendisse.io",
        "description": "mi donec amet fringilla tincidunt ante"
    },
    {
        "name": "Teresa Pomykala",
        "phone": "(260)807-4559",
        "id": 499,
        "email": "JDixon@libero.net",
        "description": "porta adipiscing sagittis quis vitae pretium"
    },
    {
        "name": "Erickson Wade",
        "phone": "(402)048-8738",
        "id": 267,
        "email": "DDawn@mattis.io",
        "description": "placerat hendrerit pulvinar scelerisque vitae tincidunt"
    },
    {
        "name": "Nikko Oxman",
        "phone": "(747)737-7777",
        "id": 649,
        "email": "MGuth@lacus.com",
        "description": "lectus sed tortor quis suspendisse sit"
    },
    {
        "name": "Martie Schoenbauer",
        "phone": "(913)382-0073",
        "id": 662,
        "email": "ATraficante@etiam.org",
        "description": "magna magna suspendisse tortor tincidunt vestibulum"
    },
    {
        "name": "Kamaniee Karneol",
        "phone": "(532)529-9676",
        "id": 512,
        "email": "ATurich@donec.com",
        "description": "odio lacus vel tincidunt dolor ac"
    },
    {
        "name": "Roosevelt Karma",
        "phone": "(324)035-9691",
        "id": 341,
        "email": "AKeirns@malesuada.com",
        "description": "mattis hendrerit mi donec vestibulum placerat"
    },
    {
        "name": "Edith Phillips",
        "phone": "(271)457-2892",
        "id": 603,
        "email": "MPuri@placerat.net",
        "description": "odio tincidunt morbi orci turpis curabitur"
    },
    {
        "name": "Jackie Reddin",
        "phone": "(299)279-1557",
        "id": 723,
        "email": "FBlunt@egestas.net",
        "description": "tortor id magna consequat eros elementum"
    },
    {
        "name": "Vicky Flores",
        "phone": "(433)159-4371",
        "id": 886,
        "email": "DBert@lectus.org",
        "description": "libero facilisis magna at elit tincidunt"
    },
    {
        "name": "Katina Mccollum",
        "phone": "(813)349-0637",
        "id": 885,
        "email": "LBreuninger@dui.net",
        "description": "sit sed suspendisse suspendisse porttitor tincidunt"
    },
    {
        "name": "Jian Gulotta",
        "phone": "(104)430-3569",
        "id": 222,
        "email": "AWillman@vestibulum.com",
        "description": "tortor sed vestibulum sollicitudin placerat elementum"
    },
    {
        "name": "Shaneka Brinkley",
        "phone": "(771)848-8856",
        "id": 59,
        "email": "AHolcombe@aenean.ly",
        "description": "egestas magna morbi sollicitudin lectus tincidunt"
    },
    {
        "name": "Dawn Calo",
        "phone": "(767)347-8629",
        "id": 473,
        "email": "RZanatta@dolor.net",
        "description": "mattis mi malesuada amet sed sed"
    },
    {
        "name": "Kamal Marin",
        "phone": "(821)272-0024",
        "id": 652,
        "email": "IMaher@augue.net",
        "description": "in curabitur lectus amet dolor pulvinar"
    },
    {
        "name": "Kay Terrill",
        "phone": "(563)533-5793",
        "id": 435,
        "email": "KMiyaki@hendrerit.io",
        "description": "eros sit tortor odio mattis dolor"
    },
    {
        "name": "Christine Reitz",
        "phone": "(933)424-8001",
        "id": 866,
        "email": "SFultz@adipiscing.gov",
        "description": "aliquam lacus morbi ac tincidunt sit"
    },
    {
        "name": "Sherrie Sober",
        "phone": "(889)466-9022",
        "id": 516,
        "email": "JBrown@sit.gov",
        "description": "vel vel sit eget donec quis"
    },
    {
        "name": "Bernard Haglund",
        "phone": "(930)849-8802",
        "id": 708,
        "email": "CMendiola@elementum.io",
        "description": "ipsum aliquam sagittis et tortor lacus"
    },
    {
        "name": "Larry Dykstra",
        "phone": "(470)529-1312",
        "id": 788,
        "email": "KFrench@sed.io",
        "description": "fringilla risus placerat lectus rutrum scelerisque"
    },
    {
        "name": "Rupa Traficante",
        "phone": "(690)344-5686",
        "id": 99,
        "email": "CTollund@et.net",
        "description": "lorem ipsum sed sollicitudin aenean molestie"
    },
    {
        "name": "Gus Kunselman",
        "phone": "(657)862-7330",
        "id": 487,
        "email": "BGuindin@vel.ly",
        "description": "sit malesuada adipiscing porta tincidunt vitae"
    },
    {
        "name": "Minhajuddin Slate",
        "phone": "(259)204-0200",
        "id": 798,
        "email": "KWyner@porta.org",
        "description": "libero etiam pharetra suspendisse amet etiam"
    },
    {
        "name": "Francesca Nuccio",
        "phone": "(816)959-4514",
        "id": 384,
        "email": "MDonaldson@adipiscing.org",
        "description": "amet nec id vestibulum elit pulvinar"
    }
];

export default Loader;
