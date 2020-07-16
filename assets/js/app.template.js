var tabs_acc_template = `<li class="nav-item">
                            <a id="section{{ctr}}" href="#pane{{ctr}}" class="nav-link nav-pane-container {{active}}" data-toggle="tab">{{title}}</a>
                        </li>`;

var content_template  = `<div id="pane{{ctr}}" class="card tab-pane fade {{active}}" role="tabpanel" aria-labelledby="section{{ctr}}">
                            <div class="card-header" id="heading{{ctr}}">
                                <h5>
                                    <a class="collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="collapse{{ctr}}" href="#collapse{{ctr}}">
                                        {{title}}
                                    </a>
                                </h5>
                            </div>

                            <div id="collapse{{ctr}}" class="collapse {{active}} {{in}}" data-parent="#tabs-content-container" role="tabpanel" aria-labelledby="heading{{ctr}}">
                                <div class="card-body padding-10p">
                                    {{content}}
                                </div>
                            </div>
                        </div>`;