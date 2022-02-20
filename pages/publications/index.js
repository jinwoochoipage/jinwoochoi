import PublicationCard from "../../components/Publications/PublicationCard";
import { makeStyles } from "@material-ui/core";
import styles from "styles/jss/nextjs-material-kit/pages/peoplePage.js";
import Parallax from "components/Parallax/Parallax.js";
import classNames from "classnames";
import styled from "@emotion/styled";

const publications = [
  {
    title:
      "Learning Representational Invariances for Data-Efficient Action Recognition",
    sub: "arXiv preprint",
    mainAuthor: "Jinwoo Choi*",
    authors: ["Yuliang Zou*", "Qitong Wang", "Jia-Bin Huang"],
  },
  {
    title: "Shuffle and Attend: Video Domain Adaptation",
    sub: "European Conference on Computer Vision (ECCV) 2020. (26.4% acceptance rate)",
    mainAuthor: "Jinwoo Choi",
    authors: ["Gaurav Sharma", "Samuel Schulter", "Jia-Bin Huang"],
    pdf: "http://www.google.com/url?q=http%3A%2F%2Fwww.ecva.net%2Fpapers%2Feccv_2020%2Fpapers_ECCV%2Fpapers%2F123570664.pdf&sa=D&sntz=1&usg=AFQjCNGue8pW7GiqAQpGrbBTuPQhIIgkzg",
  },
  {
    title:
      "Unsupervised and Semi-Supervised Domain Adaptation for Action Recognition from Drones",
    sub: "Winter Conference on Applications of Computer Vision (WACV) 2020. (Oral presentation)",
    mainAuthor: "Jinwoo Choi",
    authors: ["Gaurav Sharma", "Manmohan Chandraker", "Jia-Bin Huang"],
    pdf: "http://www.google.com/url?q=http%3A%2F%2Fopenaccess.thecvf.com%2Fcontent_WACV_2020%2Fpapers%2FChoi_Unsupervised_and_Semi-Supervised_Domain_Adaptation_for_Action_Recognition_from_Drones_WACV_2020_paper.pdf&sa=D&sntz=1&usg=AFQjCNGr0G-ivoRO1Y87H1XsJ7Mu4y-NUg",
  },
  {
    title:
      "Why Can’t I Dance in the Mall? Learning to Mitigate Scene Bias in Action Recognition",
    sub: "Proceedings of Neural Information Processing Systems (NeurIPS), 2019. (21.2% acceptance rate)",
    mainAuthor: "Jinwoo Choi",
    authors: ["Chen Gao", "Joseph Messou", "Jia-Bin Huang"],
    pdf: "https://www.google.com/url?q=https%3A%2F%2Fpapers.nips.cc%2Fpaper%2F8372-why-cant-i-dance-in-the-mall-learning-to-mitigate-scene-bias-in-action-recognition.pdf&sa=D&sntz=1&usg=AFQjCNFD7YS5O-FcIPmN2yHF951PRmtUiw",
  },
  {
    title:
      "Robust Multi-Person Tracking for Real-Time Intelligent Video Surveillance",
    sub: "ETRI Journal (SCI), 2015.",
    mainAuthor: "Jinwoo Choi",
    authors: ["Daesung Moon", "Jang-Hee Yoo"],
  },
  {
    title: "Obscene Video Detection Using Multiple-Classifier Fusion",
    sub: "Japan-Korea Joint Workshop on Frontiers of Computer Vision (FCV), 2015. (Oral presentation)",
    mainAuthor: "Jinwoo Choi",
    authors: ["Seungwan Han"],
  },
  {
    title: "The Visual Object Tracking VOT2014 Challenge Results",
    sub: "European Conference on Computer Vision (ECCV) Workshop, 2014.",
    mainAuthor: "Matej Kristan et al. (including Jinwoo Choi)",
    authors: [],
    pdf: "http://www.google.com/url?q=http%3A%2F%2Fwww.votchallenge.net%2Fvot2014%2Fdownload%2Fvot_2014_paper.pdf&sa=D&sntz=1&usg=AFQjCNFQgGmkmu6WkxJ7ykTuH_D0DxaTiQ",
  },
  {
    title:
      "Real-Time Multi-Person Tracking in Fixed Surveillance Camera Environment",
    sub: "IEEE International Conference on Consumer Electronics (ICCE), 2013.",
    mainAuthor: "Jinwoo Choi",
    authors: ["Jang-Hee Yoo"],
    pdf: "https://www.google.com/url?q=https%3A%2F%2Fwww.dropbox.com%2Fs%2Fiztx3l95h35r8ud%2F06486824.pdf%3Fdl%3D0&sa=D&sntz=1&usg=AFQjCNGSKidv4mCAFHBYcWBIjKXjzInmjw",
  },
  {
    title: "Multiple Channel Division for Efficient Distributed Video Coding",
    sub: "IEEE International Conference on Image Processing (ICIP), 2009.",
    mainAuthor: "Jinwoo Choi",
    authors: ["Sang-Uk Park", "Young-Yoon Lee", "Chang-Su Kim", " Sang-Uk Lee"],
    pdf: "https://www.google.com/url?q=https%3A%2F%2Fwww.dropbox.com%2Fs%2Fn0ncykf1c4q59hp%2FICIP2009.pdf%3Fdl%3D0&sa=D&sntz=1&usg=AFQjCNEmJLAOzauBk0TjKEMTBVVvwgCTNg",
  },
  {
    title:
      "Flexible Complexity Control between Encoder and Decoder for Video Coding",
    sub: "IEEE International Workshop on Multimedia Signal Processing (MMSP), 2009.",
    mainAuthor: "Jinwoo Choi",
    authors: ["Sang-Uk Park", "Chang-Su Kim", "Sang-Uk Lee"],
    pdf: "https://www.google.com/url?q=https%3A%2F%2Fwww.dropbox.com%2Fs%2Fmi1e0mxaciicz8l%2FMMSP2009.pdf%3Fdl%3D0&sa=D&sntz=1&usg=AFQjCNFFsqrXSPgKsUAhjlznCh2--jeoTA",
  },
  {
    title:
      "Efficient Distributed Video Coding Using Symmetric Motion Estimation and Channel Division",
    sub: "IEEE Pacific Rim Conference on Communications, Computers and  Signal Processing, 2009.",
    mainAuthor: "Jinwoo Choi",
    authors: [
      "Sang-Uk Park",
      "Chang-Su Kim",
      "Sang-Uk Lee",
      "Jung Won Kang",
      "Kyung Jun Lee",
    ],
    pdf: "https://www.google.com/url?q=https%3A%2F%2Fwww.dropbox.com%2Fs%2Fnye7n79jg93z3n5%2FPACRIM2009.pdf%3Fdl%3D0&sa=D&sntz=1&usg=AFQjCNH3Vw3I5Ni4EWOWB_iGfA0S9bmcgw",
  },
];

export default function PublicationsPage() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <>
      <StyledParallax filter responsive image="/img/main-bg.jpeg" />
      <Container>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            {publications.map((publication, index) => (
              <PublicationCard key={index} publication={publication} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

const StyledParallax = styled(Parallax)`
  height: 200px !important;
`;

const Container = styled.div`
  padding-top: 50px;
`;
