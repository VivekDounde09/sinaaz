import { NavigationBtn, Tabber } from '@/components';
import { NavbarTwo } from '@/containers/pageListAsync';
// import { reactIcons } from '@/utils/icons';
import React from 'react';

const ques = [
  {
    ques: 'What is Kai-zan?',
    time: '1 Min',
  },
  {
    ques: 'What is Kai-zan?',
    time: '1 Min',
  },
  {
    ques: 'What is Kai-zan?',
    time: '1 Min',
  },
  {
    ques: 'What is Kai-zan?',
    time: '1 Min',
  },
  {
    ques: 'What is Kai-zan?',
    time: '1 Min',
  },
  {
    ques: 'What is Kai-zan?',
    time: '1 Min',
  },
];

const PlanDetails = () => {
  return (
    <>
      <NavbarTwo />
      <Tabber />
      <section className="my-10 lg:container mx-3">
        <h1 className="head-30 my-10">Plan Details</h1>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 w-full">
          <div>
            <div className="">
              <img src="/images/Intro/intro.png" alt="" />
            </div>
          </div>
          <div className="w-full">
            <h2 className="para-16 text-20 pb-6">Browse Chapter Plan</h2>
            <div className="flex flex-col gap-5 w-full">
              {ques.map((item, index) => (
                <div
                  className="bg-[#F5F7FF] flex items-center justify-between px-6 py-3 w-full border-primary rounded-lg"
                  key={index}
                >
                  <p className="para-bold-18">{item.ques}</p>
                  <p className="para-16 text-[#B0B0B0]">{item.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <h2 className="head-30 text-center my-5">How Do I Apply?</h2>
        <div className="max-w-[800px] mx-auto">
          <p className="text-center para-18">
            After determining how much you want to contribute per year, you will
            start the enrollment process and complete underwriting with the life
            insurer to determine your rate and health class for your IUL
            insurance policy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
          <div className="px-[50px] py-3 pb-6 bg-[#F5F7FF] rounded-20  flex-col flex-center gap-5">
            <div className="flex-center">
              <button className="mx-auto text-[#28E19F] bg-green-100 px-6 py-2 rounded-[50px]">
                Step 1
              </button>
            </div>
            <div className="flex-center">
              <div className="h-[75px] w-[100px]">
                <img
                  className="h-full w-full object-cover"
                  src="/images/PlanDetails/one.png"
                  alt=""
                />
              </div>
            </div>
            <h2 className="head-24 text-center">
              Determine Annual Contribution Amount
            </h2>
          </div>
          <div className="px-[50px] py-3 pb-6 bg-[#F5F7FF] rounded-20 flex flex-col items-center justify-center gap-5">
            <div className="flex-center">
              <button className="mx-auto text-[#28E19F] bg-green-100 px-6 py-2 rounded-[50px]">
                Step 2
              </button>
            </div>
            <div className="flex-center">
              <div className="h-[75px] w-[60 px]">
                <img
                  className="h-full w-full object-cover"
                  src="/images/PlanDetails/two.png"
                  alt=""
                />
              </div>
            </div>
            <h2 className="head-24 text-center">
              Determine Annual Contribution Amount
            </h2>
          </div>
          <div className="px-[50px] py-3 pb-6 bg-[#F5F7FF] rounded-20 flex flex-col items-center justify-center gap-5">
            <div className="flex-center">
              <button className="mx-auto text-[#28E19F] bg-green-100 px-6 py-2 rounded-[50px]">
                Step 3
              </button>
            </div>
            <div className="flex-center">
              <div className="h-[75px] w-[60px]">
                <img
                  className="h-full w-full object-cover"
                  src="/images/PlanDetails/three.png"
                  alt=""
                />
              </div>
            </div>
            <h2 className="head-24 text-center">
              Determine Annual Contribution Amount
            </h2>
          </div>
        </div>

        <div className="grid items-center md:grid-cols-2 grid-cols-1 gap-20 my-20">
          <div className="">
            <h2 className="head-30  mb-5 ">Trust Creation</h2>
            <p className="para-18 text-16 mb-5">
              When the life insurer completes its underwriting on you, you will
              be notified to complete additional documents, including a turnkey
              trust that will be the owner of your policy. Once documents are
              completed and requirements met, you will submit your first
              payment, which includes amounts put towards the IUL insurance
              policy premiums and trust fees. The payment will be payable to
              your trust and deposited to your trust account with the trustee
              until the lender is ready to finish funding the policy premium for
              the first year.
            </p>
          </div>
          <div className="flex-center">
            <img
              className="object-cover"
              src="/images/PlanDetails/one1.png"
              alt=""
            />
          </div>
          {/* <div className="flex flex-col items-center justify-center">
            <div className=" sm:w-[542px] h-[126px]  py-3 flex-center gap-5 border-primary rounded-20">
              <div className="h-[77px] w-[100px]">
                <img
                  className="h-full w-full object-cover"
                  src="/images/PlanDetails/one.png"
                  alt=""
                />
              </div>
              <div>
                <p className="head-24">Send in Initial Contribution</p>
              </div>
            </div>

            <div className="my-4 text-xl">{reactIcons.longDown}</div>

            <div className="sm:w-[542px] h-[126px] px-10  py-3 flex-center gap-5 border-primary rounded-20">
              <div className="h-[40px] w-[152px] flex-none">
                <img
                  className="h-full w-full object-cover"
                  src="/images/PlanDetails/four.png"
                  alt=""
                />
              </div>
              <div>
                <p className="head-24">
                  Trustee set up an Account for your contributions
                </p>
              </div>
            </div>

            <div className="my-4 text-xl">{reactIcons.longDown}</div>

            <div className="sm:w-[542px] h-[126px] py-3 flex-center gap-5 border-primary rounded-20">
              <div className="h-[89px] w-[72px]">
                <img
                  className="h-full w-full object-cover"
                  src="/images/PlanDetails/five.png"
                  alt=""
                />
              </div>
              <div>
                <p className="head-24">Bank Account</p>
              </div>
            </div>
          </div> */}
        </div>

        <div className="grid items-center md:grid-cols-2 grid-cols-1 gap-20 my-10">
          {/* <div className="flex flex-col items-center justify-center">
            <h2 className="head-30  mb-5 ">Combined Contributions</h2>

            <div className=" sm:w-[542px] h-[258px]  py-3 flex flex-col items-center justify-center gap-5 border-primary rounded-20">
              <div className="flex-center gap-5">
                <div className="h-[60px] w-[75px]">
                  <img
                    className="h-full w-full object-cover"
                    src="/images/PlanDetails/one.png"
                    alt=""
                  />
                </div>
                <div>
                  <p className="head-24">Send in Initial Contribution</p>
                </div>
              </div>
              <p className="text-center"> +</p>
              <div className="flex-center gap-5">
                <div className="h-[60px] w-[75px]">
                  <img
                    className="h-full w-full object-cover"
                    src="/images/PlanDetails/one.png"
                    alt=""
                  />
                </div>
                <div>
                  <p className="head-24">Send in Initial Contribution</p>
                </div>
              </div>
            </div>

            <div className="my-4 text-xl">{reactIcons.longDown}</div>

            <div className="sm:w-[542px] h-[126px] px-10  py-3 flex-center gap-5 border-primary rounded-20">
              <div className="h-[69px] w-[69px] flex-none">
                <img
                  className="h-full w-full object-cover"
                  src="/images/PlanDetails/3.png"
                  alt=""
                />
              </div>
              <div>
                <p className="head-24">
                  Trustee set up an Account for your contributions
                </p>
              </div>
            </div>

            <div className="my-4 text-xl">{reactIcons.longDown}</div>

            <div className="sm:w-[542px] h-[126px] py-3 flex-center gap-5 border-primary rounded-20">
              <div className="h-[78px] w-[63px]">
                <img
                  className="h-full w-full object-cover"
                  src="/images/PlanDetails/4.png"
                  alt=""
                />
              </div>
              <div>
                <p className="head-24">Policy Issued and assigned to Lender</p>
              </div>
            </div>
          </div> */}
          <div className="flex-center">
            <img src="/images/PlanDetails/two2.png" alt="" />
          </div>
          <div className="">
            <h2 className="head-30  mb-5 ">Policy Creation</h2>
            <p className="para-18 text-16 mb-5">
              Your contributions and the matching commercial loan funds will be
              sent to the life insurance carrier to establish your coverage
              under your policy. The life insurance carrier will send you a
              welcome kit once the policy has been funded through your
              contributions and the commercial loan funds.
            </p>
          </div>
        </div>

        <div className="grid items-center md:grid-cols-2 grid-cols-1 gap-20 my-20">
          <div className="pr-10">
            <h2 className="head-30  mb-5 ">
              Kai -Zen® Additional Protection Features
            </h2>
            <p className="para-18 text-16 mb-5">
              Each Kai-Zen participant will have an established trust, which the
              participant controls, and is monitored by an independent
              third-party trustee. The participant’s IUL insurance policy is
              assigned to the commercial lender as collateral for the commercial
              loan, which is used in part to fund the IUL insurance policy
              premiums. The trustee administers the IUL insurance policy
              annually until the commercial loan is repaid. Each participant
              receives an annual report on the performance of his or her IUL
              insurance policy. The trust also provides an added layer of asset
              protection by making it difficult for creditors to get access to
              the participant’s IUL insurance policy, including its death
              benefits and cash value which are held by the trust.
            </p>
            <p className="para-18 text-16 mb-5">
              <b>Note:</b> The loan must be repaid before the participant can
              access any of the living or death benefit funds in the IUL
              insurance policy. Generally, the Kai-Zen strategy anticipates that
              the loan will be fully repaid in policy year 15, depending upon
              the growth. However, a participant can access the funds before
              this time if the loan is fully repaid. Once the loan is repaid,
              the IUL insurance policy assignment to the commercial lender is
              released. The loan attributable to the participant can be paid off
              by the participant at any time.
            </p>
          </div>
          <div className="flex-center">
            <img src="/images/PlanDetails/three3.png" alt="" />
          </div>
          {/* <div className="flex flex-col items-center justify-center">
            <h2 className="head-30 text-center mb-5">
              Trustee Signs Agreement to Pledge Policy to Lender as the Loan
              Collateral Until loan Repayment
            </h2>
            <div className=" sm:w-[542px] h-[126px]  py-3 flex-center gap-5 border-primary rounded-20">
              <div className="h-[77px] w-[63px]">
                <img
                  className="h-full w-full object-cover"
                  src="/images/PlanDetails/11.png"
                  alt=""
                />
              </div>
            </div>

            <div className="my-4 text-xl">{reactIcons.longDown}</div>

            <div className="sm:w-[542px] h-[126px] px-10  py-3 flex-center gap-5 border-primary rounded-20">
              <div className="h-[78px] w-[134px] flex-none">
                <img
                  className="h-full w-full object-cover"
                  src="/images/PlanDetails/22.png"
                  alt=""
                />
              </div>
            </div>

            <div className="my-4 text-xl">{reactIcons.longDown}</div>

            <div className="sm:w-[542px] h-[126px] py-3 flex-center gap-5 border-primary rounded-20">
              <div className="h-[75px] w-[79px]">
                <img
                  className="h-full w-full object-cover"
                  src="/images/PlanDetails/33.png"
                  alt=""
                />
              </div>
            </div>
          </div> */}
        </div>

        <div className="my-5">
          <h2 className="head-30">Increase Your Accumulated Funds</h2>
          <p className="para-18 ">
            Kai -Zen® represents one of the most comprehensive strategies for
            high-income individuals looking to accumulate funds as they age.
            With downside protection and upside potential, Kai -Zen® can help
            provide a solid foundation for financial planning as you age.
          </p>
        </div>
        <div className="flex-center my-10">
          <button className="blue-btn">Get your Insurance</button>
        </div>
      </section>
      <NavigationBtn />
    </>
  );
};

export default PlanDetails;
