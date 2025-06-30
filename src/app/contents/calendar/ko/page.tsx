import React from "react";

const CalendarPage: React.FC = () => {
  return (
    <div>
      <Calendar />
    </div>
  );
};

export default CalendarPage;

const Calendar = () => {
  return (
    <table width="100%" className="border-neutral-600 border">
      <tbody>
        <tr>
          <td
            width="168px"
            className="max-w-[180px] border border-neutral-600 p-1"
            valign="top">
            <div className="holine">
              <div className="kcalendar">
                <h3>2024.01</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>日</td>
                      <td>月</td>
                      <td>火</td>
                      <td>水</td>
                      <td>木</td>
                      <td>金</td>
                      <td>土</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="hkr hjp">1</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td>７</td>
                      <td className="hjp">８</td>
                      <td>９</td>
                      <td>10</td>
                      <td>11</td>
                      <td>12</td>
                      <td>13</td>
                    </tr>

                    <tr>
                      <td>14</td>
                      <td>15</td>
                      <td>16</td>
                      <td>17</td>
                      <td>18</td>
                      <td>19</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>21</td>
                      <td>22</td>
                      <td>23</td>
                      <td>24</td>
                      <td>25</td>
                      <td>26</td>
                      <td>27</td>
                    </tr>
                    <tr>
                      <td>28</td>
                      <td>29</td>
                      <td>30</td>
                      <td>31</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="kholiday">
                <table>
                  <tbody>
                    <tr className="hkr">
                      <th>１日</th>
                      <td>
                        <a href="/contents/todays_korean.html?id=11216">元旦</a>
                      </td>
                    </tr>
                    <tr>
                      <th>6日</th>
                      <td>
                        <a href="/contents/todays_korean.html?id=11220">小寒</a>
                      </td>
                    </tr>
                    <tr>
                      <th>20日</th>
                      <td>
                        <a href="/contents/todays_korean.html?id=11233">大寒</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </td>
          <td
            width="168px"
            className="max-w-[180px] border border-neutral-600 p-1"
            valign="top">
            <div className="holine">
              <div className="kcalendar">
                <h3>2024.02</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>日</td>
                      <td>月</td>
                      <td>火</td>
                      <td>水</td>
                      <td>木</td>
                      <td>金</td>
                      <td>土</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>5</td>
                      <td>6</td>
                      <td>7</td>
                      <td>8</td>
                      <td className="hkr">9</td>
                      <td className="hkr">10</td>
                    </tr>
                    <tr>
                      <td className="hkr hjp">11</td>
                      <td className="hkr hjp">12</td>
                      <td>13</td>
                      <td>14</td>
                      <td>15</td>
                      <td>16</td>
                      <td>17</td>
                    </tr>
                    <tr>
                      <td>18</td>
                      <td>19</td>
                      <td>20</td>
                      <td>21</td>
                      <td>22</td>
                      <td className="hjp">23</td>
                      <td>24</td>
                    </tr>
                    <tr>
                      <td>25</td>
                      <td>26</td>
                      <td>27</td>
                      <td>28</td>
                      <td>29</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="kholiday">
                <table>
                  <tbody>
                    <tr className="hkr">
                      <th>9～12日</th>
                      <td>
                        <a href="/contents/korean_life_detail.html?id=436">
                          旧正月(2月10日)連休
                        </a>
                      </td>
                    </tr>
                    <tr className="hkr">
                      <th>12日</th>
                      <td>振替休日</td>
                    </tr>
                    <tr>
                      <th>４日</th>
                      <td>立春</td>
                    </tr>
                    <tr>
                      <th>14日</th>
                      <td>
                        <a href="/contents/korean_life_detail.html?id=579">
                          バレンタインデー
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th>24日</th>
                      <td>
                        <a href="/contents/korean_life_detail.html?id=587">
                          テボルム
                        </a>
                        <br />
                        年始めの満月の日
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </td>
          <td
            width="168px"
            className="max-w-[180px] border border-neutral-600 p-1"
            valign="top">
            <div className="holine">
              <div className="kcalendar">
                <h3>2024.03</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>日</td>
                      <td>月</td>
                      <td>火</td>
                      <td>水</td>
                      <td>木</td>
                      <td>金</td>
                      <td>土</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="hkr">１</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td>６</td>
                      <td>７</td>
                      <td>８</td>
                      <td>９</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>11</td>
                      <td>12</td>
                      <td>13</td>
                      <td>14</td>
                      <td>15</td>
                      <td>16</td>
                    </tr>
                    <tr>
                      <td>17</td>
                      <td>18</td>
                      <td>19</td>
                      <td className="hjp">20</td>
                      <td>21</td>
                      <td>22</td>
                      <td>23</td>
                    </tr>
                    <tr>
                      <td>24</td>
                      <td>25</td>
                      <td>26</td>
                      <td>27</td>
                      <td>28</td>
                      <td>29</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>31</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="kholiday">
                <table>
                  <tbody>
                    <tr>
                      <th>
                        <p color="#ff0000">１日</p>
                      </th>
                      <td>
                        <p color="#ff0000">
                          <a href="/contents/korean_life_detail.html?id=440">
                            三一節
                          </a>
                        </p>
                        <br />
                        「３・１運動」を称える日
                      </td>
                    </tr>
                    <tr>
                      <th>14日</th>
                      <td>
                        <a href="/contents/korean_life_detail.html?id=580">
                          ホワイトデー
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th>20日</th>
                      <td>春分</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </td>
          <td
            width="168px"
            className="max-w-[180px] border border-neutral-600 p-1"
            valign="top">
            <div className="holine">
              <div className="kcalendar">
                <h3>2024.04</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>日</td>
                      <td>月</td>
                      <td>火</td>
                      <td>水</td>
                      <td>木</td>
                      <td>金</td>
                      <td>土</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td>７</td>
                      <td>８</td>
                      <td>９</td>
                      <td className="hkr">10</td>
                      <td>11</td>
                      <td>12</td>
                      <td>13</td>
                    </tr>

                    <tr>
                      <td>14</td>
                      <td>15</td>
                      <td>16</td>
                      <td>17</td>
                      <td>18</td>
                      <td>19</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>21</td>
                      <td>22</td>
                      <td>23</td>
                      <td>24</td>
                      <td>25</td>
                      <td>26</td>
                      <td>27</td>
                    </tr>
                    <tr>
                      <td>28</td>
                      <td className="hjp">29</td>
                      <td>30</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="kholiday">
                <table>
                  <tbody>
                    <tr>
                      <th>５日</th>
                      <td>
                        <a href="/contents/todays_korean.html?id=11838">
                          植木日
                        </a>
                        <br />
                        植樹祭の日
                        <br />
                        <a href="/contents/korean_life_detail.html?id=3402">
                          寒食
                        </a>
                        <br />
                        先祖の墓参りをする日
                      </td>
                    </tr>
                    <tr className="hkr">
                      <th>10日 </th>
                      <td>2024年地方選挙</td>
                    </tr>
                    <tr>
                      <th>14日</th>
                      <td>
                        <a href="/contents/korean_life_detail.html?id=441">
                          ブラックデー
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td
            width="168px"
            className="max-w-[180px] border border-neutral-600 p-1"
            valign="top">
            <div className="holine">
              <div className="kcalendar">
                <h3>2024.05</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>日</td>
                      <td>月</td>
                      <td>火</td>
                      <td>水</td>
                      <td>木</td>
                      <td>金</td>
                      <td>土</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>1</td>
                      <td>2</td>
                      <td className="hjp">3</td>
                      <td className="hjp">4</td>
                    </tr>
                    <tr>
                      <td className="hkr hjp">5</td>
                      <td className="hkr hjp">6</td>
                      <td>7</td>
                      <td>8</td>
                      <td>9</td>
                      <td>10</td>
                      <td>11</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>13</td>
                      <td>14</td>
                      <td className="hkr">15</td>
                      <td>16</td>
                      <td>17</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>19</td>
                      <td>20</td>
                      <td>21</td>
                      <td>22</td>
                      <td>23</td>
                      <td>24</td>
                      <td>25</td>
                    </tr>
                    <tr>
                      <td>26</td>
                      <td>27</td>
                      <td>28</td>
                      <td>29</td>
                      <td>30</td>
                      <td>31</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="kholiday">
                <table>
                  <tbody>
                    <tr className="hkr">
                      <th>5日</th>
                      <td>
                        <a href="/contents/korean_life_detail.html?id=1499#orini">
                          子どもの日
                        </a>
                      </td>
                    </tr>
                    <tr className="hkr">
                      <th>6日</th>
                      <td>振替休日</td>
                    </tr>
                    <tr>
                      <th>8日</th>
                      <td>
                        <a href="/contents/korean_life_detail.html?id=2098">
                          父母の日
                        </a>
                        <br />
                        <span className="hnm">親に感謝を伝える日</span>
                      </td>
                    </tr>
                    <tr>
                      <th>13日</th>
                      <td>
                        <a href="/contents/korean_life_detail.html?id=2100">
                          成年の日
                        </a>
                        <br />
                        成人を祝う日
                      </td>
                    </tr>

                    <tr className="hkr">
                      <th>15日</th>
                      <td>
                        <a href="/contents/korean_life_detail.html?id=1499#sokka">
                          釈迦誕生日
                        </a>{" "}
                        <br />{" "}
                        <span className="hnm">
                          <a href="/contents/korean_life_detail.html?id=2099">
                            先生の日
                          </a>
                          <br />
                          恩師に感謝を伝える日
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </td>
          <td
            width="168px"
            className="max-w-[180px] border border-neutral-600 p-1"
            valign="top">
            <div className="holine">
              <div className="kcalendar">
                <h3>2024.06</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>日</td>
                      <td>月</td>
                      <td>火</td>
                      <td>水</td>
                      <td>木</td>
                      <td>金</td>
                      <td>土</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>１</td>
                    </tr>
                    <tr>
                      <td>２</td>
                      <td>３</td>
                      <td>４</td>
                      <td>５</td>
                      <td className="hkr">６</td>
                      <td>７</td>
                      <td>８</td>
                    </tr>
                    <tr>
                      <td>９</td>
                      <td>10</td>
                      <td>11</td>
                      <td>12</td>
                      <td>13</td>
                      <td>14</td>
                      <td>15</td>
                    </tr>
                    <tr>
                      <td>16</td>
                      <td>17</td>
                      <td>18</td>
                      <td>19</td>
                      <td>20</td>
                      <td>21</td>
                      <td>22</td>
                    </tr>

                    <tr>
                      <td>23</td>
                      <td>24</td>
                      <td>25</td>
                      <td>26</td>
                      <td>27</td>
                      <td>28</td>
                      <td>29</td>
                    </tr>

                    <tr>
                      <td>30</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="kholiday">
                <table>
                  <tbody>
                    <tr className="hkr">
                      <th>６日</th>
                      <td>
                        <a href="/contents/todays_korean.html?id=12439">
                          顕忠日
                        </a>
                        <br />
                        <span className="hnm">殉国兵士の魂追慕の日</span>
                      </td>
                    </tr>

                    <tr>
                      <th>10日</th>
                      <td>
                        <a href="/contents/korean_life_detail.html?id=2158">
                          端午
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <th>21日</th>
                      <td>
                        <a href="/contents/todays_korean.html?id=10097">夏至</a>
                      </td>
                    </tr>

                    <tr>
                      <th>25日</th>
                      <td>
                        <a href="/contents/spot_mise_detail.html?id=492">
                          6.25戦争日
                        </a>
                        <br />
                        朝鮮戦争開始の日
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </td>
          <td
            width="168px"
            className="max-w-[180px] border border-neutral-600 p-1"
            valign="top">
            <div className="holine">
              <div className="kcalendar">
                <h3>2024.07</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>日</td>
                      <td>月</td>
                      <td>火</td>
                      <td>水</td>
                      <td>木</td>
                      <td>金</td>
                      <td>土</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td>７</td>
                      <td>８</td>
                      <td>９</td>
                      <td>10</td>
                      <td>11</td>
                      <td>12</td>
                      <td>13</td>
                    </tr>

                    <tr>
                      <td>14</td>
                      <td className="hjp">15</td>
                      <td>16</td>
                      <td>17</td>
                      <td>18</td>
                      <td>19</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>21</td>
                      <td>22</td>
                      <td>23</td>
                      <td>24</td>
                      <td>25</td>
                      <td>26</td>
                      <td>27</td>
                    </tr>
                    <tr>
                      <td>28</td>
                      <td>29</td>
                      <td>30</td>
                      <td>31</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="kholiday">
                <table>
                  <tbody>
                    <tr>
                      <th>15日</th>
                      <td>
                        <a href="/contents/korean_life_detail.html?id=1631">
                          初伏
                        </a>
                        <br />
                        三伏の初日
                      </td>
                    </tr>
                    <tr>
                      <th>25日</th>
                      <td>
                        <a href="/contents/korean_life_detail.html?id=1631">
                          中伏
                        </a>
                        <br />
                        三伏の２回目の日
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </td>
          <td
            width="168px"
            className="max-w-[180px] border border-neutral-600 p-1"
            valign="top">
            <div className="holine">
              <div className="kcalendar">
                <h3>2024.08</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>日</td>
                      <td>月</td>
                      <td>火</td>
                      <td>水</td>
                      <td>木</td>
                      <td>金</td>
                      <td>土</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>5</td>
                      <td>6</td>
                      <td>7</td>
                      <td>8</td>
                      <td>9</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td className="hjp">11</td>
                      <td className="hjp">12</td>
                      <td>13</td>
                      <td>14</td>
                      <td className="hkr">15</td>
                      <td>16</td>
                      <td>17</td>
                    </tr>
                    <tr>
                      <td>18</td>
                      <td>19</td>
                      <td>20</td>
                      <td>21</td>
                      <td>22</td>
                      <td>23</td>
                      <td>24</td>
                    </tr>
                    <tr>
                      <td>25</td>
                      <td>26</td>
                      <td>27</td>
                      <td>28</td>
                      <td>29</td>
                      <td>30</td>
                      <td>31</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="kholiday">
                <table>
                  <tbody>
                    <tr>
                      <th>７日</th>
                      <td>立秋</td>
                    </tr>
                    <tr>
                      <th>14日</th>
                      <td>
                        <a href="/contents/korean_life_detail.html?id=1631">
                          末伏
                        </a>
                        <br />
                        三伏の最終日
                      </td>
                    </tr>
                    <tr className="hkr">
                      <th>15日</th>
                      <td>
                        <a href="/contents/korean_life_detail.html?id=558">
                          光復節
                        </a>
                        <br />
                        <span className="hnm">韓国の独立記念日</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td
            width="168px"
            className="max-w-[180px] border border-neutral-600 p-1"
            valign="top">
            <div className="holine">
              <div className="kcalendar">
                <h3>2024.09</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>日</td>
                      <td>月</td>
                      <td>火</td>
                      <td>水</td>
                      <td>木</td>
                      <td>金</td>
                      <td>土</td>
                    </tr>
                    <tr>
                      <td>１</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td>6</td>
                      <td>7</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>9</td>
                      <td>10</td>
                      <td>11</td>
                      <td>12</td>
                      <td>13</td>
                      <td>14</td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td className="hjp hkr">16</td>
                      <td className="hkr">17</td>
                      <td className="hkr">18</td>
                      <td>19</td>
                      <td>20</td>
                      <td className="hkr">21</td>
                    </tr>
                    <tr>
                      <td className="hjp">22</td>
                      <td className="hjp">23</td>
                      <td>24</td>
                      <td>25</td>
                      <td>26</td>
                      <td>27</td>
                      <td>28</td>
                    </tr>
                    <tr>
                      <td>29</td>
                      <td>30</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="kholiday">
                <table>
                  <tbody>
                    <tr className="hkr">
                      <th>16~18日</th>
                      <td>
                        <a href="/contents/korean_life_detail.html?id=435">
                          秋夕(9月17日)連休
                        </a>
                        <br />
                        <span className="hnm">先祖供養をする秋の代表祭日</span>
                      </td>
                    </tr>

                    <tr>
                      <th>22日</th>
                      <td>
                        <a href="/contents/todays_korean.html?id=13156">秋分</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </td>
          <td
            width="168px"
            className="max-w-[180px] border border-neutral-600 p-1"
            valign="top">
            <div className="holine">
              <div className="kcalendar">
                <h3>2024.10</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>日</td>
                      <td>月</td>
                      <td>火</td>
                      <td>水</td>
                      <td>木</td>
                      <td>金</td>
                      <td>土</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>１</td>
                      <td>2</td>
                      <td className="hkr">3</td>
                      <td>4</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>６</td>
                      <td>７</td>
                      <td>８</td>
                      <td className="hkr">９</td>
                      <td>10</td>
                      <td>11</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td className="hjp">14</td>
                      <td>15</td>
                      <td>16</td>
                      <td>17</td>
                      <td>18</td>
                      <td>19</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>21</td>
                      <td>22</td>
                      <td>23</td>
                      <td>24</td>
                      <td>25</td>
                      <td>26</td>
                    </tr>
                    <tr>
                      <td>27</td>
                      <td>28</td>
                      <td>29</td>
                      <td>30</td>
                      <td>31</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="kholiday">
                <table>
                  <tbody>
                    <tr className="hkr">
                      <th>３日</th>
                      <td>
                        <a href="/contents/korean_life_detail.html?id=572">
                          開天説
                        </a>
                        <br />
                        <span className="hnm">神話に基づく建国記念日</span>
                      </td>
                    </tr>
                    <tr className="hkr">
                      <th>９日</th>
                      <td>
                        <a href="/contents/korean_life_detail.html?id=439">
                          ハングルの日
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </td>
          <td
            width="168px"
            className="max-w-[180px] border border-neutral-600 p-1"
            valign="top">
            <div className="holine">
              <div className="kcalendar">
                <h3>2024.11</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>日</td>
                      <td>月</td>
                      <td>火</td>
                      <td>水</td>
                      <td>木</td>
                      <td>金</td>
                      <td>土</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>１</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td className="hjp">3</td>
                      <td className="hjp">4</td>
                      <td>5</td>
                      <td>６</td>
                      <td>７</td>
                      <td>８</td>
                      <td>９</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>11</td>
                      <td>12</td>
                      <td>13</td>
                      <td>14</td>
                      <td>15</td>
                      <td>16</td>
                    </tr>
                    <tr>
                      <td>17</td>
                      <td>18</td>
                      <td>19</td>
                      <td>20</td>
                      <td>21</td>
                      <td>22</td>
                      <td className="hjp">23</td>
                    </tr>
                    <tr>
                      <td>24</td>
                      <td>25</td>
                      <td>26</td>
                      <td>27</td>
                      <td>28</td>
                      <td>29</td>
                      <td>30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="kholiday">
                <table>
                  <tbody>
                    <tr>
                      <th>７日</th>
                      <td>
                        <a href="/contents/todays_korean.html?id=13611">立冬</a>
                      </td>
                    </tr>
                    <tr>
                      <th>11日</th>
                      <td>
                        <a href="/contents/korean_life_detail.html?id=581">
                          ペペロデー
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </td>
          <td
            width="168px"
            className="max-w-[180px] border border-neutral-600 p-1"
            valign="top">
            <div className="holine">
              <div className="kcalendar">
                <h3>2024.12</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>日</td>
                      <td>月</td>
                      <td>火</td>
                      <td>水</td>
                      <td>木</td>
                      <td>金</td>
                      <td>土</td>
                    </tr>
                    <tr>
                      <td>１</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td>6</td>
                      <td>7</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>9</td>
                      <td>10</td>
                      <td>11</td>
                      <td>12</td>
                      <td>13</td>
                      <td>14</td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td>16</td>
                      <td>17</td>
                      <td>18</td>
                      <td>19</td>
                      <td>20</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>22</td>
                      <td>23</td>
                      <td>24</td>
                      <td className="hkr">25</td>
                      <td>26</td>
                      <td>27</td>
                      <td>28</td>
                    </tr>
                    <tr>
                      <td>29</td>
                      <td>30</td>
                      <td>31</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="kholiday">
                <table>
                  <tbody>
                    <tr>
                      <th>21日</th>
                      <td>
                        <a href="/contents/korean_life_detail.html?id=564">
                          冬至
                        </a>
                      </td>
                    </tr>
                    <tr className="hkr">
                      <th>25日</th>
                      <td>
                        <a href="/contents/korean_life_detail.html?id=3203">
                          聖誕節
                        </a>
                        <br />
                        <span className="hnm">クリスマス</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
